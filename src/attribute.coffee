# This is an extremely simple JSON Schema generator given refracted MSON input.
# It handles the following:
#
# * Simple types, enums, arrays, objects
# * Property descriptions
# * Required, default, nullable properties
# * References
# * Mixins (Includes)
# * Arrays with members of different types
# * One Of (mutually exclusive) properties
#
# It is missing support for many advanced features.
{deepEqual} = require 'assert'
inherit = require './inherit'

module.exports = renderAttributes = (root, dataStructures) ->
  attributes =
    values:      []
    properties:  []

  switch root.element
    when 'boolean', 'string', 'number'
      attributes.type = root.element
      if root.attributes?.default?
        attributes.default = root.attributes.default
    when 'enum'
      attributes.values = []
      attributes.type = 'string'
      for item in root.content or []
        attributes.values.push item.content
    when 'array'
      attributes.type = 'array'

      items = []

      for item in root.content or []
        items.push renderAttributes(item, dataStructures)

      try
        reducedItems = items.reduce (l, r) -> deepEqual(l, r) or r
      catch
        reducedItems = 'anyOf': items

      try
        attributes.type       = "Array (#{reducedItems.type})"
        attributes.properties = reducedItems.properties
      catch
        attributes.type       = "Array (#{reducedItems[0].type})"
        attributes.properties = reducedItems[0].properties

    when 'object', 'option'
      attributes.type       = 'object'
      attributes.properties = []
      required = []
      properties = root.content.slice(0)
      i = 0
      while i < properties.length
        member = properties[i]
        i++
        if member.element == 'ref'
          ref = dataStructures[member.content.href]
          i--
          properties.splice.apply properties, [i, 1].concat(ref.content)
          continue
        else if member.element == 'select'
          exclusive = []
          for option in member.content
            optionSchema = renderAttributes(option, dataStructures)
            for key, prop of optionSchema.properties
              exclusive.push key
              prop.name = key
              attributes.properties.push prop
          if not attributes.allOf then attributes.allOf = []
          attributes.allOf.push not: required: exclusive
          continue

        attributes.type = member.content.value.element

        prop = renderAttributes(member.content.value, dataStructures)
        prop.name = member.content.key.content

        if member.meta?.description?
          prop.description = member.meta.description
        if member.attributes?.typeAttributes
          typeAttr      = member.attributes.typeAttributes
          prop.required = if typeAttr.indexOf('required') is -1 then false else true
          prop.type     = [prop.type, 'null'] if typeAttr.indexOf('nullable') isnt -1

        attributes.properties.push prop

      if required.length
        attributes.required = required
    else
      ref = dataStructures[root.element]
      if ref
        attributes = renderAttributes(inherit(ref, root), dataStructures)
        attributes.type = root.element

  if root.meta?.description?
    attributes.description = root.meta.description

  if root.attributes?.typeAttributes
    typeAttr = root.attributes.typeAttributes
    if typeAttr.indexOf('nullable') isnt -1
      attributes.type = [attributes.type, 'null']
  attributes
