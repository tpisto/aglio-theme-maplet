var jade = require('jade/runtime');
function compiledFunc(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
var self = locals || {};
buf.push("<!DOCTYPE html>");
jade_mixins["Badge"] = jade_interp = function(method){
var block = (this && this.block), attributes = (this && this.attributes) || {};
switch (method){
case 'GET':
buf.push("<span class=\"badge get\"><i class=\"fa fa-arrow-down\"></i></span>");
  break;
case 'HEAD':
buf.push("<span class=\"badge head\"><i class=\"fa fa-info-circle\"></i></span>");
  break;
case 'OPTIONS':
buf.push("<span class=\"badge options\"><i class=\"fa fa-dot-circle-o\"></i></span>");
  break;
case 'POST':
buf.push("<span class=\"badge post\"><i class=\"fa fa-plus\"></i></span>");
  break;
case 'PUT':
buf.push("<span class=\"badge put\"><i class=\"fa fa-pencil\"></i></span>");
  break;
case 'PATCH':
buf.push("<span class=\"badge patch\"><i class=\"fa fa-pencil\"></i></span>");
  break;
case 'DELETE':
buf.push("<span class=\"badge delete\"><i class=\"fa fa-times\"></i></span>");
  break;
default:
buf.push("<span class=\"badge\"><i class=\"fa fa-dot-circle-o\"></i></span>");
  break;
}
};
jade_mixins["Nav"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<nav>");
if ( self.api.navItems && self.api.navItems.length)
{
buf.push("<div class=\"resource-group\"><div class=\"heading\"><div class=\"chevron\"><i class=\"open fa fa-angle-down\"></i></div><a href=\"#top\">Getting started</a></div><div class=\"collapse-content\"><ul>");
// iterate self.api.navItems
;(function(){
  var $$obj = self.api.navItems;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var item = $$obj[$index];

buf.push("<li><a" + (jade.attr("href", item[1], true, true)) + ">" + (null == (jade_interp = item[0]) ? "" : jade_interp) + "</a></li>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var item = $$obj[$index];

buf.push("<li><a" + (jade.attr("href", item[1], true, true)) + ">" + (null == (jade_interp = item[0]) ? "" : jade_interp) + "</a></li>");
    }

  }
}).call(this);

buf.push("</ul></div></div>");
}
// iterate self.api.resourceGroups || []
;(function(){
  var $$obj = self.api.resourceGroups || [];
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var resourceGroup = $$obj[$index];

buf.push("<div class=\"resource-group\"><div class=\"heading\"><div class=\"chevron\"><i class=\"open fa fa-angle-down\"></i></div><a" + (jade.attr("href", resourceGroup.elementLink, true, true)) + ">" + (null == (jade_interp = resourceGroup.name || 'API resources') ? "" : jade_interp) + "</a></div><div class=\"collapse-content\"><ul>");
// iterate resourceGroup.navItems || []
;(function(){
  var $$obj = resourceGroup.navItems || [];
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var item = $$obj[$index];

buf.push("<li><a" + (jade.attr("href", item[1], true, true)) + ">" + (null == (jade_interp = item[0]) ? "" : jade_interp) + "</a></li>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var item = $$obj[$index];

buf.push("<li><a" + (jade.attr("href", item[1], true, true)) + ">" + (null == (jade_interp = item[0]) ? "" : jade_interp) + "</a></li>");
    }

  }
}).call(this);

// iterate resourceGroup.resources || []
;(function(){
  var $$obj = resourceGroup.resources || [];
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var resource = $$obj[$index];

buf.push("<li>");
if ( !self.condenseNav || (resource.actions.length != 1))
{
buf.push("<ul>");
// iterate resource.actions || []
;(function(){
  var $$obj = resource.actions || [];
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var action = $$obj[$index];

buf.push("<li><a" + (jade.attr("href", action.elementLink, true, true)) + ">");
jade_mixins["Badge"](action.method);
buf.push((null == (jade_interp = action.name || action.method + ' ' + (action.attributes && action.attributes.uriTemplate || resource.uriTemplate)) ? "" : jade_interp) + "</a></li>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var action = $$obj[$index];

buf.push("<li><a" + (jade.attr("href", action.elementLink, true, true)) + ">");
jade_mixins["Badge"](action.method);
buf.push((null == (jade_interp = action.name || action.method + ' ' + (action.attributes && action.attributes.uriTemplate || resource.uriTemplate)) ? "" : jade_interp) + "</a></li>");
    }

  }
}).call(this);

buf.push("</ul>");
}
else
{
var action = resource.actions[0]
buf.push("<a" + (jade.attr("href", action.elementLink, true, true)) + ">");
jade_mixins["Badge"](action.method);
buf.push((null == (jade_interp = action.name || resource.name || action.method + ' ' + (action.attributes && action.attributes.uriTemplate || resource.uriTemplate)) ? "" : jade_interp) + "</a>");
}
buf.push("</li>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var resource = $$obj[$index];

buf.push("<li>");
if ( !self.condenseNav || (resource.actions.length != 1))
{
buf.push("<ul>");
// iterate resource.actions || []
;(function(){
  var $$obj = resource.actions || [];
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var action = $$obj[$index];

buf.push("<li><a" + (jade.attr("href", action.elementLink, true, true)) + ">");
jade_mixins["Badge"](action.method);
buf.push((null == (jade_interp = action.name || action.method + ' ' + (action.attributes && action.attributes.uriTemplate || resource.uriTemplate)) ? "" : jade_interp) + "</a></li>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var action = $$obj[$index];

buf.push("<li><a" + (jade.attr("href", action.elementLink, true, true)) + ">");
jade_mixins["Badge"](action.method);
buf.push((null == (jade_interp = action.name || action.method + ' ' + (action.attributes && action.attributes.uriTemplate || resource.uriTemplate)) ? "" : jade_interp) + "</a></li>");
    }

  }
}).call(this);

buf.push("</ul>");
}
else
{
var action = resource.actions[0]
buf.push("<a" + (jade.attr("href", action.elementLink, true, true)) + ">");
jade_mixins["Badge"](action.method);
buf.push((null == (jade_interp = action.name || resource.name || action.method + ' ' + (action.attributes && action.attributes.uriTemplate || resource.uriTemplate)) ? "" : jade_interp) + "</a>");
}
buf.push("</li>");
    }

  }
}).call(this);

buf.push("</ul></div></div>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var resourceGroup = $$obj[$index];

buf.push("<div class=\"resource-group\"><div class=\"heading\"><div class=\"chevron\"><i class=\"open fa fa-angle-down\"></i></div><a" + (jade.attr("href", resourceGroup.elementLink, true, true)) + ">" + (null == (jade_interp = resourceGroup.name || 'API resources') ? "" : jade_interp) + "</a></div><div class=\"collapse-content\"><ul>");
// iterate resourceGroup.navItems || []
;(function(){
  var $$obj = resourceGroup.navItems || [];
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var item = $$obj[$index];

buf.push("<li><a" + (jade.attr("href", item[1], true, true)) + ">" + (null == (jade_interp = item[0]) ? "" : jade_interp) + "</a></li>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var item = $$obj[$index];

buf.push("<li><a" + (jade.attr("href", item[1], true, true)) + ">" + (null == (jade_interp = item[0]) ? "" : jade_interp) + "</a></li>");
    }

  }
}).call(this);

// iterate resourceGroup.resources || []
;(function(){
  var $$obj = resourceGroup.resources || [];
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var resource = $$obj[$index];

buf.push("<li>");
if ( !self.condenseNav || (resource.actions.length != 1))
{
buf.push("<ul>");
// iterate resource.actions || []
;(function(){
  var $$obj = resource.actions || [];
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var action = $$obj[$index];

buf.push("<li><a" + (jade.attr("href", action.elementLink, true, true)) + ">");
jade_mixins["Badge"](action.method);
buf.push((null == (jade_interp = action.name || action.method + ' ' + (action.attributes && action.attributes.uriTemplate || resource.uriTemplate)) ? "" : jade_interp) + "</a></li>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var action = $$obj[$index];

buf.push("<li><a" + (jade.attr("href", action.elementLink, true, true)) + ">");
jade_mixins["Badge"](action.method);
buf.push((null == (jade_interp = action.name || action.method + ' ' + (action.attributes && action.attributes.uriTemplate || resource.uriTemplate)) ? "" : jade_interp) + "</a></li>");
    }

  }
}).call(this);

buf.push("</ul>");
}
else
{
var action = resource.actions[0]
buf.push("<a" + (jade.attr("href", action.elementLink, true, true)) + ">");
jade_mixins["Badge"](action.method);
buf.push((null == (jade_interp = action.name || resource.name || action.method + ' ' + (action.attributes && action.attributes.uriTemplate || resource.uriTemplate)) ? "" : jade_interp) + "</a>");
}
buf.push("</li>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var resource = $$obj[$index];

buf.push("<li>");
if ( !self.condenseNav || (resource.actions.length != 1))
{
buf.push("<ul>");
// iterate resource.actions || []
;(function(){
  var $$obj = resource.actions || [];
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var action = $$obj[$index];

buf.push("<li><a" + (jade.attr("href", action.elementLink, true, true)) + ">");
jade_mixins["Badge"](action.method);
buf.push((null == (jade_interp = action.name || action.method + ' ' + (action.attributes && action.attributes.uriTemplate || resource.uriTemplate)) ? "" : jade_interp) + "</a></li>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var action = $$obj[$index];

buf.push("<li><a" + (jade.attr("href", action.elementLink, true, true)) + ">");
jade_mixins["Badge"](action.method);
buf.push((null == (jade_interp = action.name || action.method + ' ' + (action.attributes && action.attributes.uriTemplate || resource.uriTemplate)) ? "" : jade_interp) + "</a></li>");
    }

  }
}).call(this);

buf.push("</ul>");
}
else
{
var action = resource.actions[0]
buf.push("<a" + (jade.attr("href", action.elementLink, true, true)) + ">");
jade_mixins["Badge"](action.method);
buf.push((null == (jade_interp = action.name || resource.name || action.method + ' ' + (action.attributes && action.attributes.uriTemplate || resource.uriTemplate)) ? "" : jade_interp) + "</a>");
}
buf.push("</li>");
    }

  }
}).call(this);

buf.push("</ul></div></div>");
    }

  }
}).call(this);

buf.push("</nav>");
};
jade_mixins["Parameters"] = jade_interp = function(params){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<div class=\"parameter\"><div class=\"title\"><strong>URI Parameters</strong></div><div class=\"parameter__content\"><dl class=\"inner\">");
// iterate params || []
;(function(){
  var $$obj = params || [];
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var param = $$obj[$index];

buf.push("<div class=\"dl-row\"><div class=\"dl-row__content\"><dt><div class=\"parameter-name\">" + (jade.escape(null == (jade_interp = self.urldec(param.name)) ? "" : jade_interp)) + "</div><div class=\"parameter-meta\">" + (jade.escape(null == (jade_interp = param.type) ? "" : jade_interp)) + "</div></dt><dd>" + (null == (jade_interp = self.markdown(param.description)) ? "" : jade_interp) + "</dd></div></div>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var param = $$obj[$index];

buf.push("<div class=\"dl-row\"><div class=\"dl-row__content\"><dt><div class=\"parameter-name\">" + (jade.escape(null == (jade_interp = self.urldec(param.name)) ? "" : jade_interp)) + "</div><div class=\"parameter-meta\">" + (jade.escape(null == (jade_interp = param.type) ? "" : jade_interp)) + "</div></dt><dd>" + (null == (jade_interp = self.markdown(param.description)) ? "" : jade_interp) + "</dd></div></div>");
    }

  }
}).call(this);

buf.push("</dl></div></div>");
};
jade_mixins["RequestResponse"] = jade_interp = function(title, request, collapse){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<div class=\"title\"><strong>" + (jade.escape(null == (jade_interp = title) ? "" : jade_interp)));
if ( request.name)
{
buf.push("&nbsp;&nbsp;<code>" + (jade.escape(null == (jade_interp = request.name) ? "" : jade_interp)) + "</code>");
}
buf.push("</strong>");
if ( collapse && request.hasContent)
{
buf.push("<div class=\"collapse-button\"><span class=\"close\">Hide</span><span class=\"open\">Show</span></div>");
}
buf.push("</div>");
jade_mixins["RequestResponseBody"](request, collapse);
};
jade_mixins["RequestResponseBody"] = jade_interp = function(request, collapse, showBlank){
var block = (this && this.block), attributes = (this && this.attributes) || {};
if ( request.hasContent || showBlank)
{
buf.push("<div" + (jade.cls([collapse ? 'collapse-content' : ''], [true])) + "><div class=\"inner\">");
if ( request.description)
{
buf.push("<div class=\"description\">" + (null == (jade_interp = self.markdown(request.description)) ? "" : jade_interp) + "</div>");
}
if ( request.body)
{
buf.push("<h5>Body</h5><pre><code>" + (null == (jade_interp = self.highlight(request.body, null, ['json', 'yaml', 'xml', 'javascript'])) ? "" : jade_interp) + "</code></pre><div style=\"height: 1px;\"></div>");
}
if ( !request.hasContent)
{
buf.push("<div class=\"description text-muted\">This response has no content.</div><div style=\"height: 1px;\"></div>");
}
buf.push("</div></div>");
}
};









































buf.push("");
jade_mixins["ContentTriple"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<div class=\"right\"><h5>API Endpoint</h5><a" + (jade.attr("href", self.api.host, true, true)) + ">" + (jade.escape(null == (jade_interp = self.api.host) ? "" : jade_interp)) + "</a></div><div class=\"middle\">");
if ( self.api.descriptionHtml)
{
buf.push(null == (jade_interp = self.api.descriptionHtml) ? "" : jade_interp);
}
buf.push("</div>");
// iterate self.api.resourceGroups || []
;(function(){
  var $$obj = self.api.resourceGroups || [];
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var resourceGroup = $$obj[$index];

buf.push("<div class=\"middle\"></div>");
// iterate resourceGroup.resources || []
;(function(){
  var $$obj = resourceGroup.resources || [];
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var resource = $$obj[$index];

buf.push("<div class=\"middle\"><div" + (jade.attr("id", resource.elementId, true, true)) + " class=\"resource\"><h3 class=\"resource-heading\">" + (null == (jade_interp = resource.name || ((resource.actions[0] != null) && resource.actions[0].name) || 'Resource') ? "" : jade_interp) + (jade.escape(null == (jade_interp = " ") ? "" : jade_interp)) + "<a" + (jade.attr("href", resource.elementLink, true, true)) + " class=\"permalink\">&para;</a></h3>");
if ( resource.description)
{
buf.push(null == (jade_interp = self.markdown(resource.description)) ? "" : jade_interp);
}
buf.push("</div></div>");
// iterate resource.actions || []            
;(function(){
  var $$obj = resource.actions || []            ;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var action = $$obj[$index];

buf.push("<div class=\"action-wrap\">");
if ( action.examples)
{
buf.push("<div class=\"right\"><div class=\"definition\"><span" + (jade.cls(['method',action.methodLower], [null,true])) + ">" + (jade.escape(null == (jade_interp = action.method) ? "" : jade_interp)) + "</span>&nbsp;<span class=\"uri\"><span class=\"hostname\">" + (jade.escape(null == (jade_interp = self.api.host) ? "" : jade_interp)) + "</span>" + (null == (jade_interp = action.colorizedUriTemplate) ? "" : jade_interp) + "</span></div><div class=\"tabs\">");
if ( action.hasRequest)
{
buf.push("<div class=\"example-names\"><span>Request</span></div>");
// iterate action.examples
;(function(){
  var $$obj = action.examples;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var example = $$obj[$index];

// iterate example.requests
;(function(){
  var $$obj = example.requests;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var request = $$obj[$index];

buf.push("<div class=\"tab\">");
jade_mixins["RequestResponseBody"](request, false, true);
buf.push("<div class=\"tabs\"><div class=\"example-names\"><span>Response</span>");
// iterate example.responses
;(function(){
  var $$obj = example.responses;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var response = $$obj[$index];

buf.push("<span class=\"tab-button\">" + (jade.escape(null == (jade_interp = response.name) ? "" : jade_interp)) + "</span>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var response = $$obj[$index];

buf.push("<span class=\"tab-button\">" + (jade.escape(null == (jade_interp = response.name) ? "" : jade_interp)) + "</span>");
    }

  }
}).call(this);

buf.push("</div>");
// iterate example.responses
;(function(){
  var $$obj = example.responses;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var response = $$obj[$index];

buf.push("<div class=\"tab\">");
jade_mixins["RequestResponseBody"](response, false, true);
buf.push("</div>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var response = $$obj[$index];

buf.push("<div class=\"tab\">");
jade_mixins["RequestResponseBody"](response, false, true);
buf.push("</div>");
    }

  }
}).call(this);

buf.push("</div></div>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var request = $$obj[$index];

buf.push("<div class=\"tab\">");
jade_mixins["RequestResponseBody"](request, false, true);
buf.push("<div class=\"tabs\"><div class=\"example-names\"><span>Response</span>");
// iterate example.responses
;(function(){
  var $$obj = example.responses;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var response = $$obj[$index];

buf.push("<span class=\"tab-button\">" + (jade.escape(null == (jade_interp = response.name) ? "" : jade_interp)) + "</span>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var response = $$obj[$index];

buf.push("<span class=\"tab-button\">" + (jade.escape(null == (jade_interp = response.name) ? "" : jade_interp)) + "</span>");
    }

  }
}).call(this);

buf.push("</div>");
// iterate example.responses
;(function(){
  var $$obj = example.responses;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var response = $$obj[$index];

buf.push("<div class=\"tab\">");
jade_mixins["RequestResponseBody"](response, false, true);
buf.push("</div>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var response = $$obj[$index];

buf.push("<div class=\"tab\">");
jade_mixins["RequestResponseBody"](response, false, true);
buf.push("</div>");
    }

  }
}).call(this);

buf.push("</div></div>");
    }

  }
}).call(this);

    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var example = $$obj[$index];

// iterate example.requests
;(function(){
  var $$obj = example.requests;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var request = $$obj[$index];

buf.push("<div class=\"tab\">");
jade_mixins["RequestResponseBody"](request, false, true);
buf.push("<div class=\"tabs\"><div class=\"example-names\"><span>Response</span>");
// iterate example.responses
;(function(){
  var $$obj = example.responses;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var response = $$obj[$index];

buf.push("<span class=\"tab-button\">" + (jade.escape(null == (jade_interp = response.name) ? "" : jade_interp)) + "</span>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var response = $$obj[$index];

buf.push("<span class=\"tab-button\">" + (jade.escape(null == (jade_interp = response.name) ? "" : jade_interp)) + "</span>");
    }

  }
}).call(this);

buf.push("</div>");
// iterate example.responses
;(function(){
  var $$obj = example.responses;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var response = $$obj[$index];

buf.push("<div class=\"tab\">");
jade_mixins["RequestResponseBody"](response, false, true);
buf.push("</div>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var response = $$obj[$index];

buf.push("<div class=\"tab\">");
jade_mixins["RequestResponseBody"](response, false, true);
buf.push("</div>");
    }

  }
}).call(this);

buf.push("</div></div>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var request = $$obj[$index];

buf.push("<div class=\"tab\">");
jade_mixins["RequestResponseBody"](request, false, true);
buf.push("<div class=\"tabs\"><div class=\"example-names\"><span>Response</span>");
// iterate example.responses
;(function(){
  var $$obj = example.responses;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var response = $$obj[$index];

buf.push("<span class=\"tab-button\">" + (jade.escape(null == (jade_interp = response.name) ? "" : jade_interp)) + "</span>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var response = $$obj[$index];

buf.push("<span class=\"tab-button\">" + (jade.escape(null == (jade_interp = response.name) ? "" : jade_interp)) + "</span>");
    }

  }
}).call(this);

buf.push("</div>");
// iterate example.responses
;(function(){
  var $$obj = example.responses;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var response = $$obj[$index];

buf.push("<div class=\"tab\">");
jade_mixins["RequestResponseBody"](response, false, true);
buf.push("</div>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var response = $$obj[$index];

buf.push("<div class=\"tab\">");
jade_mixins["RequestResponseBody"](response, false, true);
buf.push("</div>");
    }

  }
}).call(this);

buf.push("</div></div>");
    }

  }
}).call(this);

    }

  }
}).call(this);

}
else
{
// iterate action.examples
;(function(){
  var $$obj = action.examples;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var example = $$obj[$index];

buf.push("<div class=\"tabs\"><div class=\"example-names\"><span>Response</span>");
// iterate example.responses
;(function(){
  var $$obj = example.responses;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var response = $$obj[$index];

buf.push("<span class=\"tab-button\">" + (jade.escape(null == (jade_interp = response.name) ? "" : jade_interp)) + "</span>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var response = $$obj[$index];

buf.push("<span class=\"tab-button\">" + (jade.escape(null == (jade_interp = response.name) ? "" : jade_interp)) + "</span>");
    }

  }
}).call(this);

buf.push("</div>");
// iterate example.responses
;(function(){
  var $$obj = example.responses;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var response = $$obj[$index];

buf.push("<div class=\"tab\">");
jade_mixins["RequestResponseBody"](response, false, true);
buf.push("</div>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var response = $$obj[$index];

buf.push("<div class=\"tab\">");
jade_mixins["RequestResponseBody"](response, false, true);
buf.push("</div>");
    }

  }
}).call(this);

buf.push("</div>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var example = $$obj[$index];

buf.push("<div class=\"tabs\"><div class=\"example-names\"><span>Response</span>");
// iterate example.responses
;(function(){
  var $$obj = example.responses;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var response = $$obj[$index];

buf.push("<span class=\"tab-button\">" + (jade.escape(null == (jade_interp = response.name) ? "" : jade_interp)) + "</span>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var response = $$obj[$index];

buf.push("<span class=\"tab-button\">" + (jade.escape(null == (jade_interp = response.name) ? "" : jade_interp)) + "</span>");
    }

  }
}).call(this);

buf.push("</div>");
// iterate example.responses
;(function(){
  var $$obj = example.responses;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var response = $$obj[$index];

buf.push("<div class=\"tab\">");
jade_mixins["RequestResponseBody"](response, false, true);
buf.push("</div>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var response = $$obj[$index];

buf.push("<div class=\"tab\">");
jade_mixins["RequestResponseBody"](response, false, true);
buf.push("</div>");
    }

  }
}).call(this);

buf.push("</div>");
    }

  }
}).call(this);

}
buf.push("</div></div>");
}
buf.push("<div class=\"middle\"><a" + (jade.attr("name", action.elementId, true, true)) + " class=\"anchor\"></a><h4 class=\"action-heading-name\">" + (jade.escape(null == (jade_interp = action.name) ? "" : jade_interp)) + "</h4><div" + (jade.cls(['action',action.methodLower], [null,true])) + "><h4 class=\"action-heading\"><div class=\"name\">" + (null == (jade_interp = action.name) ? "" : jade_interp) + "</div><a" + (jade.attr("href", action.elementLink, true, true)) + (jade.cls(['method',action.methodLower], [null,true])) + ">" + (jade.escape(null == (jade_interp = action.method) ? "" : jade_interp)) + "</a><code class=\"uri\">" + (jade.escape(null == (jade_interp = self.urldec(action.uriTemplate)) ? "" : jade_interp)) + "</code></h4>");
if ( action.description)
{
buf.push(null == (jade_interp = self.markdown(action.description)) ? "" : jade_interp);
}
if ( action.parameters.length)
{
jade_mixins["Parameters"](action.parameters);
}
buf.push("");
if ( action.requestAttributes.length)
{
buf.push("<div class=\"parameter\"><div class=\"title\"><strong>Request Attributes</strong></div><div class=\"parameter__content\"><dl class=\"inner\">");
// iterate action.requestAttributes || []
;(function(){
  var $$obj = action.requestAttributes || [];
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var attribute = $$obj[$index];

buf.push("<div class=\"dl-row\"><div class=\"dl-row__content\"><dt><div class=\"parameter-name\">" + (jade.escape(null == (jade_interp = attribute.name) ? "" : jade_interp)) + "</div><div class=\"parameter-meta\">" + (jade.escape(null == (jade_interp = attribute.type) ? "" : jade_interp)) + "</div></dt><dd>");
if ( attribute.description)
{
buf.push("<p>" + (null == (jade_interp = self.markdown(attribute.description)) ? "" : jade_interp) + "</p>");
}
else
{
buf.push("<p></p>");
}
buf.push("</dd></div>");
if ( attribute.properties.length)
{
buf.push("<div class=\"parameter nested\"><div class=\"title\"><div class=\"collapse-button\"><span class=\"close\">Hide child attributes</span><span class=\"open\">Show child attributes</span></div></div><div class=\"collapse-content\"><dl class=\"inner\">");
// iterate attribute.properties || []
;(function(){
  var $$obj = attribute.properties || [];
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var property = $$obj[$index];

buf.push("<div class=\"dl-row\"><div class=\"dl-row__content\"><dt><div class=\"parameter-name\">" + (jade.escape(null == (jade_interp = property.name) ? "" : jade_interp)) + "</div><div class=\"parameter-meta\">" + (jade.escape(null == (jade_interp = property.type) ? "" : jade_interp)) + "</div></dt><dd>");
if ( property.description)
{
buf.push("<p>" + (null == (jade_interp = self.markdown(property.description)) ? "" : jade_interp) + "</p>");
}
else
{
buf.push("<p></p>");
}
buf.push("</dd></div></div>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var property = $$obj[$index];

buf.push("<div class=\"dl-row\"><div class=\"dl-row__content\"><dt><div class=\"parameter-name\">" + (jade.escape(null == (jade_interp = property.name) ? "" : jade_interp)) + "</div><div class=\"parameter-meta\">" + (jade.escape(null == (jade_interp = property.type) ? "" : jade_interp)) + "</div></dt><dd>");
if ( property.description)
{
buf.push("<p>" + (null == (jade_interp = self.markdown(property.description)) ? "" : jade_interp) + "</p>");
}
else
{
buf.push("<p></p>");
}
buf.push("</dd></div></div>");
    }

  }
}).call(this);

buf.push("</dl></div></div>");
}
buf.push("</div>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var attribute = $$obj[$index];

buf.push("<div class=\"dl-row\"><div class=\"dl-row__content\"><dt><div class=\"parameter-name\">" + (jade.escape(null == (jade_interp = attribute.name) ? "" : jade_interp)) + "</div><div class=\"parameter-meta\">" + (jade.escape(null == (jade_interp = attribute.type) ? "" : jade_interp)) + "</div></dt><dd>");
if ( attribute.description)
{
buf.push("<p>" + (null == (jade_interp = self.markdown(attribute.description)) ? "" : jade_interp) + "</p>");
}
else
{
buf.push("<p></p>");
}
buf.push("</dd></div>");
if ( attribute.properties.length)
{
buf.push("<div class=\"parameter nested\"><div class=\"title\"><div class=\"collapse-button\"><span class=\"close\">Hide child attributes</span><span class=\"open\">Show child attributes</span></div></div><div class=\"collapse-content\"><dl class=\"inner\">");
// iterate attribute.properties || []
;(function(){
  var $$obj = attribute.properties || [];
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var property = $$obj[$index];

buf.push("<div class=\"dl-row\"><div class=\"dl-row__content\"><dt><div class=\"parameter-name\">" + (jade.escape(null == (jade_interp = property.name) ? "" : jade_interp)) + "</div><div class=\"parameter-meta\">" + (jade.escape(null == (jade_interp = property.type) ? "" : jade_interp)) + "</div></dt><dd>");
if ( property.description)
{
buf.push("<p>" + (null == (jade_interp = self.markdown(property.description)) ? "" : jade_interp) + "</p>");
}
else
{
buf.push("<p></p>");
}
buf.push("</dd></div></div>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var property = $$obj[$index];

buf.push("<div class=\"dl-row\"><div class=\"dl-row__content\"><dt><div class=\"parameter-name\">" + (jade.escape(null == (jade_interp = property.name) ? "" : jade_interp)) + "</div><div class=\"parameter-meta\">" + (jade.escape(null == (jade_interp = property.type) ? "" : jade_interp)) + "</div></dt><dd>");
if ( property.description)
{
buf.push("<p>" + (null == (jade_interp = self.markdown(property.description)) ? "" : jade_interp) + "</p>");
}
else
{
buf.push("<p></p>");
}
buf.push("</dd></div></div>");
    }

  }
}).call(this);

buf.push("</dl></div></div>");
}
buf.push("</div>");
    }

  }
}).call(this);

buf.push("</dl></div></div>");
}
if ( action.responseAttributes.length)
{
buf.push("<div class=\"parameter\"><div class=\"title\"><strong>Response Attributes</strong></div><div class=\"parameter__content\"><dl class=\"inner\">");
// iterate action.responseAttributes || []
;(function(){
  var $$obj = action.responseAttributes || [];
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var attribute = $$obj[$index];

buf.push("<div class=\"dl-row\"><div class=\"dl-row__content\"><dt><div class=\"parameter-name\">" + (jade.escape(null == (jade_interp = attribute.name) ? "" : jade_interp)) + "</div><div class=\"parameter-meta\">" + (jade.escape(null == (jade_interp = attribute.type) ? "" : jade_interp)) + "</div></dt><dd>");
if ( attribute.description)
{
buf.push("<p>" + (null == (jade_interp = self.markdown(attribute.description)) ? "" : jade_interp) + "</p>");
}
else
{
buf.push("<p></p>");
}
buf.push("</dd></div>");
if ( attribute.properties.length)
{
buf.push("<div class=\"parameter nested\"><div class=\"title\"><div class=\"collapse-button\"><span class=\"close\">Hide child attributes</span><span class=\"open\">Show child attributes</span></div></div><div class=\"collapse-content\"><dl class=\"inner\">");
// iterate attribute.properties || []
;(function(){
  var $$obj = attribute.properties || [];
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var property = $$obj[$index];

buf.push("<div class=\"dl-row\"><div class=\"dl-row__content\"><dt><div class=\"parameter-name\">" + (jade.escape(null == (jade_interp = property.name) ? "" : jade_interp)) + "</div><div class=\"parameter-meta\">" + (jade.escape(null == (jade_interp = property.type) ? "" : jade_interp)) + "</div></dt><dd>");
if ( property.description)
{
buf.push("<p>" + (null == (jade_interp = self.markdown(property.description)) ? "" : jade_interp) + "</p>");
}
else
{
buf.push("<p></p>");
}
buf.push("</dd></div></div>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var property = $$obj[$index];

buf.push("<div class=\"dl-row\"><div class=\"dl-row__content\"><dt><div class=\"parameter-name\">" + (jade.escape(null == (jade_interp = property.name) ? "" : jade_interp)) + "</div><div class=\"parameter-meta\">" + (jade.escape(null == (jade_interp = property.type) ? "" : jade_interp)) + "</div></dt><dd>");
if ( property.description)
{
buf.push("<p>" + (null == (jade_interp = self.markdown(property.description)) ? "" : jade_interp) + "</p>");
}
else
{
buf.push("<p></p>");
}
buf.push("</dd></div></div>");
    }

  }
}).call(this);

buf.push("</dl></div></div>");
}
buf.push("</div>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var attribute = $$obj[$index];

buf.push("<div class=\"dl-row\"><div class=\"dl-row__content\"><dt><div class=\"parameter-name\">" + (jade.escape(null == (jade_interp = attribute.name) ? "" : jade_interp)) + "</div><div class=\"parameter-meta\">" + (jade.escape(null == (jade_interp = attribute.type) ? "" : jade_interp)) + "</div></dt><dd>");
if ( attribute.description)
{
buf.push("<p>" + (null == (jade_interp = self.markdown(attribute.description)) ? "" : jade_interp) + "</p>");
}
else
{
buf.push("<p></p>");
}
buf.push("</dd></div>");
if ( attribute.properties.length)
{
buf.push("<div class=\"parameter nested\"><div class=\"title\"><div class=\"collapse-button\"><span class=\"close\">Hide child attributes</span><span class=\"open\">Show child attributes</span></div></div><div class=\"collapse-content\"><dl class=\"inner\">");
// iterate attribute.properties || []
;(function(){
  var $$obj = attribute.properties || [];
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var property = $$obj[$index];

buf.push("<div class=\"dl-row\"><div class=\"dl-row__content\"><dt><div class=\"parameter-name\">" + (jade.escape(null == (jade_interp = property.name) ? "" : jade_interp)) + "</div><div class=\"parameter-meta\">" + (jade.escape(null == (jade_interp = property.type) ? "" : jade_interp)) + "</div></dt><dd>");
if ( property.description)
{
buf.push("<p>" + (null == (jade_interp = self.markdown(property.description)) ? "" : jade_interp) + "</p>");
}
else
{
buf.push("<p></p>");
}
buf.push("</dd></div></div>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var property = $$obj[$index];

buf.push("<div class=\"dl-row\"><div class=\"dl-row__content\"><dt><div class=\"parameter-name\">" + (jade.escape(null == (jade_interp = property.name) ? "" : jade_interp)) + "</div><div class=\"parameter-meta\">" + (jade.escape(null == (jade_interp = property.type) ? "" : jade_interp)) + "</div></dt><dd>");
if ( property.description)
{
buf.push("<p>" + (null == (jade_interp = self.markdown(property.description)) ? "" : jade_interp) + "</p>");
}
else
{
buf.push("<p></p>");
}
buf.push("</dd></div></div>");
    }

  }
}).call(this);

buf.push("</dl></div></div>");
}
buf.push("</div>");
    }

  }
}).call(this);

buf.push("</dl></div></div>");
}
buf.push("</div></div></div>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var action = $$obj[$index];

buf.push("<div class=\"action-wrap\">");
if ( action.examples)
{
buf.push("<div class=\"right\"><div class=\"definition\"><span" + (jade.cls(['method',action.methodLower], [null,true])) + ">" + (jade.escape(null == (jade_interp = action.method) ? "" : jade_interp)) + "</span>&nbsp;<span class=\"uri\"><span class=\"hostname\">" + (jade.escape(null == (jade_interp = self.api.host) ? "" : jade_interp)) + "</span>" + (null == (jade_interp = action.colorizedUriTemplate) ? "" : jade_interp) + "</span></div><div class=\"tabs\">");
if ( action.hasRequest)
{
buf.push("<div class=\"example-names\"><span>Request</span></div>");
// iterate action.examples
;(function(){
  var $$obj = action.examples;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var example = $$obj[$index];

// iterate example.requests
;(function(){
  var $$obj = example.requests;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var request = $$obj[$index];

buf.push("<div class=\"tab\">");
jade_mixins["RequestResponseBody"](request, false, true);
buf.push("<div class=\"tabs\"><div class=\"example-names\"><span>Response</span>");
// iterate example.responses
;(function(){
  var $$obj = example.responses;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var response = $$obj[$index];

buf.push("<span class=\"tab-button\">" + (jade.escape(null == (jade_interp = response.name) ? "" : jade_interp)) + "</span>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var response = $$obj[$index];

buf.push("<span class=\"tab-button\">" + (jade.escape(null == (jade_interp = response.name) ? "" : jade_interp)) + "</span>");
    }

  }
}).call(this);

buf.push("</div>");
// iterate example.responses
;(function(){
  var $$obj = example.responses;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var response = $$obj[$index];

buf.push("<div class=\"tab\">");
jade_mixins["RequestResponseBody"](response, false, true);
buf.push("</div>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var response = $$obj[$index];

buf.push("<div class=\"tab\">");
jade_mixins["RequestResponseBody"](response, false, true);
buf.push("</div>");
    }

  }
}).call(this);

buf.push("</div></div>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var request = $$obj[$index];

buf.push("<div class=\"tab\">");
jade_mixins["RequestResponseBody"](request, false, true);
buf.push("<div class=\"tabs\"><div class=\"example-names\"><span>Response</span>");
// iterate example.responses
;(function(){
  var $$obj = example.responses;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var response = $$obj[$index];

buf.push("<span class=\"tab-button\">" + (jade.escape(null == (jade_interp = response.name) ? "" : jade_interp)) + "</span>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var response = $$obj[$index];

buf.push("<span class=\"tab-button\">" + (jade.escape(null == (jade_interp = response.name) ? "" : jade_interp)) + "</span>");
    }

  }
}).call(this);

buf.push("</div>");
// iterate example.responses
;(function(){
  var $$obj = example.responses;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var response = $$obj[$index];

buf.push("<div class=\"tab\">");
jade_mixins["RequestResponseBody"](response, false, true);
buf.push("</div>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var response = $$obj[$index];

buf.push("<div class=\"tab\">");
jade_mixins["RequestResponseBody"](response, false, true);
buf.push("</div>");
    }

  }
}).call(this);

buf.push("</div></div>");
    }

  }
}).call(this);

    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var example = $$obj[$index];

// iterate example.requests
;(function(){
  var $$obj = example.requests;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var request = $$obj[$index];

buf.push("<div class=\"tab\">");
jade_mixins["RequestResponseBody"](request, false, true);
buf.push("<div class=\"tabs\"><div class=\"example-names\"><span>Response</span>");
// iterate example.responses
;(function(){
  var $$obj = example.responses;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var response = $$obj[$index];

buf.push("<span class=\"tab-button\">" + (jade.escape(null == (jade_interp = response.name) ? "" : jade_interp)) + "</span>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var response = $$obj[$index];

buf.push("<span class=\"tab-button\">" + (jade.escape(null == (jade_interp = response.name) ? "" : jade_interp)) + "</span>");
    }

  }
}).call(this);

buf.push("</div>");
// iterate example.responses
;(function(){
  var $$obj = example.responses;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var response = $$obj[$index];

buf.push("<div class=\"tab\">");
jade_mixins["RequestResponseBody"](response, false, true);
buf.push("</div>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var response = $$obj[$index];

buf.push("<div class=\"tab\">");
jade_mixins["RequestResponseBody"](response, false, true);
buf.push("</div>");
    }

  }
}).call(this);

buf.push("</div></div>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var request = $$obj[$index];

buf.push("<div class=\"tab\">");
jade_mixins["RequestResponseBody"](request, false, true);
buf.push("<div class=\"tabs\"><div class=\"example-names\"><span>Response</span>");
// iterate example.responses
;(function(){
  var $$obj = example.responses;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var response = $$obj[$index];

buf.push("<span class=\"tab-button\">" + (jade.escape(null == (jade_interp = response.name) ? "" : jade_interp)) + "</span>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var response = $$obj[$index];

buf.push("<span class=\"tab-button\">" + (jade.escape(null == (jade_interp = response.name) ? "" : jade_interp)) + "</span>");
    }

  }
}).call(this);

buf.push("</div>");
// iterate example.responses
;(function(){
  var $$obj = example.responses;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var response = $$obj[$index];

buf.push("<div class=\"tab\">");
jade_mixins["RequestResponseBody"](response, false, true);
buf.push("</div>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var response = $$obj[$index];

buf.push("<div class=\"tab\">");
jade_mixins["RequestResponseBody"](response, false, true);
buf.push("</div>");
    }

  }
}).call(this);

buf.push("</div></div>");
    }

  }
}).call(this);

    }

  }
}).call(this);

}
else
{
// iterate action.examples
;(function(){
  var $$obj = action.examples;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var example = $$obj[$index];

buf.push("<div class=\"tabs\"><div class=\"example-names\"><span>Response</span>");
// iterate example.responses
;(function(){
  var $$obj = example.responses;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var response = $$obj[$index];

buf.push("<span class=\"tab-button\">" + (jade.escape(null == (jade_interp = response.name) ? "" : jade_interp)) + "</span>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var response = $$obj[$index];

buf.push("<span class=\"tab-button\">" + (jade.escape(null == (jade_interp = response.name) ? "" : jade_interp)) + "</span>");
    }

  }
}).call(this);

buf.push("</div>");
// iterate example.responses
;(function(){
  var $$obj = example.responses;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var response = $$obj[$index];

buf.push("<div class=\"tab\">");
jade_mixins["RequestResponseBody"](response, false, true);
buf.push("</div>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var response = $$obj[$index];

buf.push("<div class=\"tab\">");
jade_mixins["RequestResponseBody"](response, false, true);
buf.push("</div>");
    }

  }
}).call(this);

buf.push("</div>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var example = $$obj[$index];

buf.push("<div class=\"tabs\"><div class=\"example-names\"><span>Response</span>");
// iterate example.responses
;(function(){
  var $$obj = example.responses;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var response = $$obj[$index];

buf.push("<span class=\"tab-button\">" + (jade.escape(null == (jade_interp = response.name) ? "" : jade_interp)) + "</span>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var response = $$obj[$index];

buf.push("<span class=\"tab-button\">" + (jade.escape(null == (jade_interp = response.name) ? "" : jade_interp)) + "</span>");
    }

  }
}).call(this);

buf.push("</div>");
// iterate example.responses
;(function(){
  var $$obj = example.responses;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var response = $$obj[$index];

buf.push("<div class=\"tab\">");
jade_mixins["RequestResponseBody"](response, false, true);
buf.push("</div>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var response = $$obj[$index];

buf.push("<div class=\"tab\">");
jade_mixins["RequestResponseBody"](response, false, true);
buf.push("</div>");
    }

  }
}).call(this);

buf.push("</div>");
    }

  }
}).call(this);

}
buf.push("</div></div>");
}
buf.push("<div class=\"middle\"><a" + (jade.attr("name", action.elementId, true, true)) + " class=\"anchor\"></a><h4 class=\"action-heading-name\">" + (jade.escape(null == (jade_interp = action.name) ? "" : jade_interp)) + "</h4><div" + (jade.cls(['action',action.methodLower], [null,true])) + "><h4 class=\"action-heading\"><div class=\"name\">" + (null == (jade_interp = action.name) ? "" : jade_interp) + "</div><a" + (jade.attr("href", action.elementLink, true, true)) + (jade.cls(['method',action.methodLower], [null,true])) + ">" + (jade.escape(null == (jade_interp = action.method) ? "" : jade_interp)) + "</a><code class=\"uri\">" + (jade.escape(null == (jade_interp = self.urldec(action.uriTemplate)) ? "" : jade_interp)) + "</code></h4>");
if ( action.description)
{
buf.push(null == (jade_interp = self.markdown(action.description)) ? "" : jade_interp);
}
if ( action.parameters.length)
{
jade_mixins["Parameters"](action.parameters);
}
buf.push("");
if ( action.requestAttributes.length)
{
buf.push("<div class=\"parameter\"><div class=\"title\"><strong>Request Attributes</strong></div><div class=\"parameter__content\"><dl class=\"inner\">");
// iterate action.requestAttributes || []
;(function(){
  var $$obj = action.requestAttributes || [];
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var attribute = $$obj[$index];

buf.push("<div class=\"dl-row\"><div class=\"dl-row__content\"><dt><div class=\"parameter-name\">" + (jade.escape(null == (jade_interp = attribute.name) ? "" : jade_interp)) + "</div><div class=\"parameter-meta\">" + (jade.escape(null == (jade_interp = attribute.type) ? "" : jade_interp)) + "</div></dt><dd>");
if ( attribute.description)
{
buf.push("<p>" + (null == (jade_interp = self.markdown(attribute.description)) ? "" : jade_interp) + "</p>");
}
else
{
buf.push("<p></p>");
}
buf.push("</dd></div>");
if ( attribute.properties.length)
{
buf.push("<div class=\"parameter nested\"><div class=\"title\"><div class=\"collapse-button\"><span class=\"close\">Hide child attributes</span><span class=\"open\">Show child attributes</span></div></div><div class=\"collapse-content\"><dl class=\"inner\">");
// iterate attribute.properties || []
;(function(){
  var $$obj = attribute.properties || [];
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var property = $$obj[$index];

buf.push("<div class=\"dl-row\"><div class=\"dl-row__content\"><dt><div class=\"parameter-name\">" + (jade.escape(null == (jade_interp = property.name) ? "" : jade_interp)) + "</div><div class=\"parameter-meta\">" + (jade.escape(null == (jade_interp = property.type) ? "" : jade_interp)) + "</div></dt><dd>");
if ( property.description)
{
buf.push("<p>" + (null == (jade_interp = self.markdown(property.description)) ? "" : jade_interp) + "</p>");
}
else
{
buf.push("<p></p>");
}
buf.push("</dd></div></div>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var property = $$obj[$index];

buf.push("<div class=\"dl-row\"><div class=\"dl-row__content\"><dt><div class=\"parameter-name\">" + (jade.escape(null == (jade_interp = property.name) ? "" : jade_interp)) + "</div><div class=\"parameter-meta\">" + (jade.escape(null == (jade_interp = property.type) ? "" : jade_interp)) + "</div></dt><dd>");
if ( property.description)
{
buf.push("<p>" + (null == (jade_interp = self.markdown(property.description)) ? "" : jade_interp) + "</p>");
}
else
{
buf.push("<p></p>");
}
buf.push("</dd></div></div>");
    }

  }
}).call(this);

buf.push("</dl></div></div>");
}
buf.push("</div>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var attribute = $$obj[$index];

buf.push("<div class=\"dl-row\"><div class=\"dl-row__content\"><dt><div class=\"parameter-name\">" + (jade.escape(null == (jade_interp = attribute.name) ? "" : jade_interp)) + "</div><div class=\"parameter-meta\">" + (jade.escape(null == (jade_interp = attribute.type) ? "" : jade_interp)) + "</div></dt><dd>");
if ( attribute.description)
{
buf.push("<p>" + (null == (jade_interp = self.markdown(attribute.description)) ? "" : jade_interp) + "</p>");
}
else
{
buf.push("<p></p>");
}
buf.push("</dd></div>");
if ( attribute.properties.length)
{
buf.push("<div class=\"parameter nested\"><div class=\"title\"><div class=\"collapse-button\"><span class=\"close\">Hide child attributes</span><span class=\"open\">Show child attributes</span></div></div><div class=\"collapse-content\"><dl class=\"inner\">");
// iterate attribute.properties || []
;(function(){
  var $$obj = attribute.properties || [];
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var property = $$obj[$index];

buf.push("<div class=\"dl-row\"><div class=\"dl-row__content\"><dt><div class=\"parameter-name\">" + (jade.escape(null == (jade_interp = property.name) ? "" : jade_interp)) + "</div><div class=\"parameter-meta\">" + (jade.escape(null == (jade_interp = property.type) ? "" : jade_interp)) + "</div></dt><dd>");
if ( property.description)
{
buf.push("<p>" + (null == (jade_interp = self.markdown(property.description)) ? "" : jade_interp) + "</p>");
}
else
{
buf.push("<p></p>");
}
buf.push("</dd></div></div>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var property = $$obj[$index];

buf.push("<div class=\"dl-row\"><div class=\"dl-row__content\"><dt><div class=\"parameter-name\">" + (jade.escape(null == (jade_interp = property.name) ? "" : jade_interp)) + "</div><div class=\"parameter-meta\">" + (jade.escape(null == (jade_interp = property.type) ? "" : jade_interp)) + "</div></dt><dd>");
if ( property.description)
{
buf.push("<p>" + (null == (jade_interp = self.markdown(property.description)) ? "" : jade_interp) + "</p>");
}
else
{
buf.push("<p></p>");
}
buf.push("</dd></div></div>");
    }

  }
}).call(this);

buf.push("</dl></div></div>");
}
buf.push("</div>");
    }

  }
}).call(this);

buf.push("</dl></div></div>");
}
if ( action.responseAttributes.length)
{
buf.push("<div class=\"parameter\"><div class=\"title\"><strong>Response Attributes</strong></div><div class=\"parameter__content\"><dl class=\"inner\">");
// iterate action.responseAttributes || []
;(function(){
  var $$obj = action.responseAttributes || [];
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var attribute = $$obj[$index];

buf.push("<div class=\"dl-row\"><div class=\"dl-row__content\"><dt><div class=\"parameter-name\">" + (jade.escape(null == (jade_interp = attribute.name) ? "" : jade_interp)) + "</div><div class=\"parameter-meta\">" + (jade.escape(null == (jade_interp = attribute.type) ? "" : jade_interp)) + "</div></dt><dd>");
if ( attribute.description)
{
buf.push("<p>" + (null == (jade_interp = self.markdown(attribute.description)) ? "" : jade_interp) + "</p>");
}
else
{
buf.push("<p></p>");
}
buf.push("</dd></div>");
if ( attribute.properties.length)
{
buf.push("<div class=\"parameter nested\"><div class=\"title\"><div class=\"collapse-button\"><span class=\"close\">Hide child attributes</span><span class=\"open\">Show child attributes</span></div></div><div class=\"collapse-content\"><dl class=\"inner\">");
// iterate attribute.properties || []
;(function(){
  var $$obj = attribute.properties || [];
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var property = $$obj[$index];

buf.push("<div class=\"dl-row\"><div class=\"dl-row__content\"><dt><div class=\"parameter-name\">" + (jade.escape(null == (jade_interp = property.name) ? "" : jade_interp)) + "</div><div class=\"parameter-meta\">" + (jade.escape(null == (jade_interp = property.type) ? "" : jade_interp)) + "</div></dt><dd>");
if ( property.description)
{
buf.push("<p>" + (null == (jade_interp = self.markdown(property.description)) ? "" : jade_interp) + "</p>");
}
else
{
buf.push("<p></p>");
}
buf.push("</dd></div></div>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var property = $$obj[$index];

buf.push("<div class=\"dl-row\"><div class=\"dl-row__content\"><dt><div class=\"parameter-name\">" + (jade.escape(null == (jade_interp = property.name) ? "" : jade_interp)) + "</div><div class=\"parameter-meta\">" + (jade.escape(null == (jade_interp = property.type) ? "" : jade_interp)) + "</div></dt><dd>");
if ( property.description)
{
buf.push("<p>" + (null == (jade_interp = self.markdown(property.description)) ? "" : jade_interp) + "</p>");
}
else
{
buf.push("<p></p>");
}
buf.push("</dd></div></div>");
    }

  }
}).call(this);

buf.push("</dl></div></div>");
}
buf.push("</div>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var attribute = $$obj[$index];

buf.push("<div class=\"dl-row\"><div class=\"dl-row__content\"><dt><div class=\"parameter-name\">" + (jade.escape(null == (jade_interp = attribute.name) ? "" : jade_interp)) + "</div><div class=\"parameter-meta\">" + (jade.escape(null == (jade_interp = attribute.type) ? "" : jade_interp)) + "</div></dt><dd>");
if ( attribute.description)
{
buf.push("<p>" + (null == (jade_interp = self.markdown(attribute.description)) ? "" : jade_interp) + "</p>");
}
else
{
buf.push("<p></p>");
}
buf.push("</dd></div>");
if ( attribute.properties.length)
{
buf.push("<div class=\"parameter nested\"><div class=\"title\"><div class=\"collapse-button\"><span class=\"close\">Hide child attributes</span><span class=\"open\">Show child attributes</span></div></div><div class=\"collapse-content\"><dl class=\"inner\">");
// iterate attribute.properties || []
;(function(){
  var $$obj = attribute.properties || [];
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var property = $$obj[$index];

buf.push("<div class=\"dl-row\"><div class=\"dl-row__content\"><dt><div class=\"parameter-name\">" + (jade.escape(null == (jade_interp = property.name) ? "" : jade_interp)) + "</div><div class=\"parameter-meta\">" + (jade.escape(null == (jade_interp = property.type) ? "" : jade_interp)) + "</div></dt><dd>");
if ( property.description)
{
buf.push("<p>" + (null == (jade_interp = self.markdown(property.description)) ? "" : jade_interp) + "</p>");
}
else
{
buf.push("<p></p>");
}
buf.push("</dd></div></div>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var property = $$obj[$index];

buf.push("<div class=\"dl-row\"><div class=\"dl-row__content\"><dt><div class=\"parameter-name\">" + (jade.escape(null == (jade_interp = property.name) ? "" : jade_interp)) + "</div><div class=\"parameter-meta\">" + (jade.escape(null == (jade_interp = property.type) ? "" : jade_interp)) + "</div></dt><dd>");
if ( property.description)
{
buf.push("<p>" + (null == (jade_interp = self.markdown(property.description)) ? "" : jade_interp) + "</p>");
}
else
{
buf.push("<p></p>");
}
buf.push("</dd></div></div>");
    }

  }
}).call(this);

buf.push("</dl></div></div>");
}
buf.push("</div>");
    }

  }
}).call(this);

buf.push("</dl></div></div>");
}
buf.push("</div></div></div>");
    }

  }
}).call(this);

    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var resource = $$obj[$index];

buf.push("<div class=\"middle\"><div" + (jade.attr("id", resource.elementId, true, true)) + " class=\"resource\"><h3 class=\"resource-heading\">" + (null == (jade_interp = resource.name || ((resource.actions[0] != null) && resource.actions[0].name) || 'Resource') ? "" : jade_interp) + (jade.escape(null == (jade_interp = " ") ? "" : jade_interp)) + "<a" + (jade.attr("href", resource.elementLink, true, true)) + " class=\"permalink\">&para;</a></h3>");
if ( resource.description)
{
buf.push(null == (jade_interp = self.markdown(resource.description)) ? "" : jade_interp);
}
buf.push("</div></div>");
// iterate resource.actions || []            
;(function(){
  var $$obj = resource.actions || []            ;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var action = $$obj[$index];

buf.push("<div class=\"action-wrap\">");
if ( action.examples)
{
buf.push("<div class=\"right\"><div class=\"definition\"><span" + (jade.cls(['method',action.methodLower], [null,true])) + ">" + (jade.escape(null == (jade_interp = action.method) ? "" : jade_interp)) + "</span>&nbsp;<span class=\"uri\"><span class=\"hostname\">" + (jade.escape(null == (jade_interp = self.api.host) ? "" : jade_interp)) + "</span>" + (null == (jade_interp = action.colorizedUriTemplate) ? "" : jade_interp) + "</span></div><div class=\"tabs\">");
if ( action.hasRequest)
{
buf.push("<div class=\"example-names\"><span>Request</span></div>");
// iterate action.examples
;(function(){
  var $$obj = action.examples;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var example = $$obj[$index];

// iterate example.requests
;(function(){
  var $$obj = example.requests;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var request = $$obj[$index];

buf.push("<div class=\"tab\">");
jade_mixins["RequestResponseBody"](request, false, true);
buf.push("<div class=\"tabs\"><div class=\"example-names\"><span>Response</span>");
// iterate example.responses
;(function(){
  var $$obj = example.responses;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var response = $$obj[$index];

buf.push("<span class=\"tab-button\">" + (jade.escape(null == (jade_interp = response.name) ? "" : jade_interp)) + "</span>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var response = $$obj[$index];

buf.push("<span class=\"tab-button\">" + (jade.escape(null == (jade_interp = response.name) ? "" : jade_interp)) + "</span>");
    }

  }
}).call(this);

buf.push("</div>");
// iterate example.responses
;(function(){
  var $$obj = example.responses;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var response = $$obj[$index];

buf.push("<div class=\"tab\">");
jade_mixins["RequestResponseBody"](response, false, true);
buf.push("</div>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var response = $$obj[$index];

buf.push("<div class=\"tab\">");
jade_mixins["RequestResponseBody"](response, false, true);
buf.push("</div>");
    }

  }
}).call(this);

buf.push("</div></div>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var request = $$obj[$index];

buf.push("<div class=\"tab\">");
jade_mixins["RequestResponseBody"](request, false, true);
buf.push("<div class=\"tabs\"><div class=\"example-names\"><span>Response</span>");
// iterate example.responses
;(function(){
  var $$obj = example.responses;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var response = $$obj[$index];

buf.push("<span class=\"tab-button\">" + (jade.escape(null == (jade_interp = response.name) ? "" : jade_interp)) + "</span>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var response = $$obj[$index];

buf.push("<span class=\"tab-button\">" + (jade.escape(null == (jade_interp = response.name) ? "" : jade_interp)) + "</span>");
    }

  }
}).call(this);

buf.push("</div>");
// iterate example.responses
;(function(){
  var $$obj = example.responses;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var response = $$obj[$index];

buf.push("<div class=\"tab\">");
jade_mixins["RequestResponseBody"](response, false, true);
buf.push("</div>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var response = $$obj[$index];

buf.push("<div class=\"tab\">");
jade_mixins["RequestResponseBody"](response, false, true);
buf.push("</div>");
    }

  }
}).call(this);

buf.push("</div></div>");
    }

  }
}).call(this);

    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var example = $$obj[$index];

// iterate example.requests
;(function(){
  var $$obj = example.requests;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var request = $$obj[$index];

buf.push("<div class=\"tab\">");
jade_mixins["RequestResponseBody"](request, false, true);
buf.push("<div class=\"tabs\"><div class=\"example-names\"><span>Response</span>");
// iterate example.responses
;(function(){
  var $$obj = example.responses;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var response = $$obj[$index];

buf.push("<span class=\"tab-button\">" + (jade.escape(null == (jade_interp = response.name) ? "" : jade_interp)) + "</span>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var response = $$obj[$index];

buf.push("<span class=\"tab-button\">" + (jade.escape(null == (jade_interp = response.name) ? "" : jade_interp)) + "</span>");
    }

  }
}).call(this);

buf.push("</div>");
// iterate example.responses
;(function(){
  var $$obj = example.responses;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var response = $$obj[$index];

buf.push("<div class=\"tab\">");
jade_mixins["RequestResponseBody"](response, false, true);
buf.push("</div>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var response = $$obj[$index];

buf.push("<div class=\"tab\">");
jade_mixins["RequestResponseBody"](response, false, true);
buf.push("</div>");
    }

  }
}).call(this);

buf.push("</div></div>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var request = $$obj[$index];

buf.push("<div class=\"tab\">");
jade_mixins["RequestResponseBody"](request, false, true);
buf.push("<div class=\"tabs\"><div class=\"example-names\"><span>Response</span>");
// iterate example.responses
;(function(){
  var $$obj = example.responses;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var response = $$obj[$index];

buf.push("<span class=\"tab-button\">" + (jade.escape(null == (jade_interp = response.name) ? "" : jade_interp)) + "</span>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var response = $$obj[$index];

buf.push("<span class=\"tab-button\">" + (jade.escape(null == (jade_interp = response.name) ? "" : jade_interp)) + "</span>");
    }

  }
}).call(this);

buf.push("</div>");
// iterate example.responses
;(function(){
  var $$obj = example.responses;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var response = $$obj[$index];

buf.push("<div class=\"tab\">");
jade_mixins["RequestResponseBody"](response, false, true);
buf.push("</div>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var response = $$obj[$index];

buf.push("<div class=\"tab\">");
jade_mixins["RequestResponseBody"](response, false, true);
buf.push("</div>");
    }

  }
}).call(this);

buf.push("</div></div>");
    }

  }
}).call(this);

    }

  }
}).call(this);

}
else
{
// iterate action.examples
;(function(){
  var $$obj = action.examples;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var example = $$obj[$index];

buf.push("<div class=\"tabs\"><div class=\"example-names\"><span>Response</span>");
// iterate example.responses
;(function(){
  var $$obj = example.responses;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var response = $$obj[$index];

buf.push("<span class=\"tab-button\">" + (jade.escape(null == (jade_interp = response.name) ? "" : jade_interp)) + "</span>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var response = $$obj[$index];

buf.push("<span class=\"tab-button\">" + (jade.escape(null == (jade_interp = response.name) ? "" : jade_interp)) + "</span>");
    }

  }
}).call(this);

buf.push("</div>");
// iterate example.responses
;(function(){
  var $$obj = example.responses;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var response = $$obj[$index];

buf.push("<div class=\"tab\">");
jade_mixins["RequestResponseBody"](response, false, true);
buf.push("</div>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var response = $$obj[$index];

buf.push("<div class=\"tab\">");
jade_mixins["RequestResponseBody"](response, false, true);
buf.push("</div>");
    }

  }
}).call(this);

buf.push("</div>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var example = $$obj[$index];

buf.push("<div class=\"tabs\"><div class=\"example-names\"><span>Response</span>");
// iterate example.responses
;(function(){
  var $$obj = example.responses;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var response = $$obj[$index];

buf.push("<span class=\"tab-button\">" + (jade.escape(null == (jade_interp = response.name) ? "" : jade_interp)) + "</span>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var response = $$obj[$index];

buf.push("<span class=\"tab-button\">" + (jade.escape(null == (jade_interp = response.name) ? "" : jade_interp)) + "</span>");
    }

  }
}).call(this);

buf.push("</div>");
// iterate example.responses
;(function(){
  var $$obj = example.responses;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var response = $$obj[$index];

buf.push("<div class=\"tab\">");
jade_mixins["RequestResponseBody"](response, false, true);
buf.push("</div>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var response = $$obj[$index];

buf.push("<div class=\"tab\">");
jade_mixins["RequestResponseBody"](response, false, true);
buf.push("</div>");
    }

  }
}).call(this);

buf.push("</div>");
    }

  }
}).call(this);

}
buf.push("</div></div>");
}
buf.push("<div class=\"middle\"><a" + (jade.attr("name", action.elementId, true, true)) + " class=\"anchor\"></a><h4 class=\"action-heading-name\">" + (jade.escape(null == (jade_interp = action.name) ? "" : jade_interp)) + "</h4><div" + (jade.cls(['action',action.methodLower], [null,true])) + "><h4 class=\"action-heading\"><div class=\"name\">" + (null == (jade_interp = action.name) ? "" : jade_interp) + "</div><a" + (jade.attr("href", action.elementLink, true, true)) + (jade.cls(['method',action.methodLower], [null,true])) + ">" + (jade.escape(null == (jade_interp = action.method) ? "" : jade_interp)) + "</a><code class=\"uri\">" + (jade.escape(null == (jade_interp = self.urldec(action.uriTemplate)) ? "" : jade_interp)) + "</code></h4>");
if ( action.description)
{
buf.push(null == (jade_interp = self.markdown(action.description)) ? "" : jade_interp);
}
if ( action.parameters.length)
{
jade_mixins["Parameters"](action.parameters);
}
buf.push("");
if ( action.requestAttributes.length)
{
buf.push("<div class=\"parameter\"><div class=\"title\"><strong>Request Attributes</strong></div><div class=\"parameter__content\"><dl class=\"inner\">");
// iterate action.requestAttributes || []
;(function(){
  var $$obj = action.requestAttributes || [];
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var attribute = $$obj[$index];

buf.push("<div class=\"dl-row\"><div class=\"dl-row__content\"><dt><div class=\"parameter-name\">" + (jade.escape(null == (jade_interp = attribute.name) ? "" : jade_interp)) + "</div><div class=\"parameter-meta\">" + (jade.escape(null == (jade_interp = attribute.type) ? "" : jade_interp)) + "</div></dt><dd>");
if ( attribute.description)
{
buf.push("<p>" + (null == (jade_interp = self.markdown(attribute.description)) ? "" : jade_interp) + "</p>");
}
else
{
buf.push("<p></p>");
}
buf.push("</dd></div>");
if ( attribute.properties.length)
{
buf.push("<div class=\"parameter nested\"><div class=\"title\"><div class=\"collapse-button\"><span class=\"close\">Hide child attributes</span><span class=\"open\">Show child attributes</span></div></div><div class=\"collapse-content\"><dl class=\"inner\">");
// iterate attribute.properties || []
;(function(){
  var $$obj = attribute.properties || [];
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var property = $$obj[$index];

buf.push("<div class=\"dl-row\"><div class=\"dl-row__content\"><dt><div class=\"parameter-name\">" + (jade.escape(null == (jade_interp = property.name) ? "" : jade_interp)) + "</div><div class=\"parameter-meta\">" + (jade.escape(null == (jade_interp = property.type) ? "" : jade_interp)) + "</div></dt><dd>");
if ( property.description)
{
buf.push("<p>" + (null == (jade_interp = self.markdown(property.description)) ? "" : jade_interp) + "</p>");
}
else
{
buf.push("<p></p>");
}
buf.push("</dd></div></div>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var property = $$obj[$index];

buf.push("<div class=\"dl-row\"><div class=\"dl-row__content\"><dt><div class=\"parameter-name\">" + (jade.escape(null == (jade_interp = property.name) ? "" : jade_interp)) + "</div><div class=\"parameter-meta\">" + (jade.escape(null == (jade_interp = property.type) ? "" : jade_interp)) + "</div></dt><dd>");
if ( property.description)
{
buf.push("<p>" + (null == (jade_interp = self.markdown(property.description)) ? "" : jade_interp) + "</p>");
}
else
{
buf.push("<p></p>");
}
buf.push("</dd></div></div>");
    }

  }
}).call(this);

buf.push("</dl></div></div>");
}
buf.push("</div>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var attribute = $$obj[$index];

buf.push("<div class=\"dl-row\"><div class=\"dl-row__content\"><dt><div class=\"parameter-name\">" + (jade.escape(null == (jade_interp = attribute.name) ? "" : jade_interp)) + "</div><div class=\"parameter-meta\">" + (jade.escape(null == (jade_interp = attribute.type) ? "" : jade_interp)) + "</div></dt><dd>");
if ( attribute.description)
{
buf.push("<p>" + (null == (jade_interp = self.markdown(attribute.description)) ? "" : jade_interp) + "</p>");
}
else
{
buf.push("<p></p>");
}
buf.push("</dd></div>");
if ( attribute.properties.length)
{
buf.push("<div class=\"parameter nested\"><div class=\"title\"><div class=\"collapse-button\"><span class=\"close\">Hide child attributes</span><span class=\"open\">Show child attributes</span></div></div><div class=\"collapse-content\"><dl class=\"inner\">");
// iterate attribute.properties || []
;(function(){
  var $$obj = attribute.properties || [];
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var property = $$obj[$index];

buf.push("<div class=\"dl-row\"><div class=\"dl-row__content\"><dt><div class=\"parameter-name\">" + (jade.escape(null == (jade_interp = property.name) ? "" : jade_interp)) + "</div><div class=\"parameter-meta\">" + (jade.escape(null == (jade_interp = property.type) ? "" : jade_interp)) + "</div></dt><dd>");
if ( property.description)
{
buf.push("<p>" + (null == (jade_interp = self.markdown(property.description)) ? "" : jade_interp) + "</p>");
}
else
{
buf.push("<p></p>");
}
buf.push("</dd></div></div>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var property = $$obj[$index];

buf.push("<div class=\"dl-row\"><div class=\"dl-row__content\"><dt><div class=\"parameter-name\">" + (jade.escape(null == (jade_interp = property.name) ? "" : jade_interp)) + "</div><div class=\"parameter-meta\">" + (jade.escape(null == (jade_interp = property.type) ? "" : jade_interp)) + "</div></dt><dd>");
if ( property.description)
{
buf.push("<p>" + (null == (jade_interp = self.markdown(property.description)) ? "" : jade_interp) + "</p>");
}
else
{
buf.push("<p></p>");
}
buf.push("</dd></div></div>");
    }

  }
}).call(this);

buf.push("</dl></div></div>");
}
buf.push("</div>");
    }

  }
}).call(this);

buf.push("</dl></div></div>");
}
if ( action.responseAttributes.length)
{
buf.push("<div class=\"parameter\"><div class=\"title\"><strong>Response Attributes</strong></div><div class=\"parameter__content\"><dl class=\"inner\">");
// iterate action.responseAttributes || []
;(function(){
  var $$obj = action.responseAttributes || [];
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var attribute = $$obj[$index];

buf.push("<div class=\"dl-row\"><div class=\"dl-row__content\"><dt><div class=\"parameter-name\">" + (jade.escape(null == (jade_interp = attribute.name) ? "" : jade_interp)) + "</div><div class=\"parameter-meta\">" + (jade.escape(null == (jade_interp = attribute.type) ? "" : jade_interp)) + "</div></dt><dd>");
if ( attribute.description)
{
buf.push("<p>" + (null == (jade_interp = self.markdown(attribute.description)) ? "" : jade_interp) + "</p>");
}
else
{
buf.push("<p></p>");
}
buf.push("</dd></div>");
if ( attribute.properties.length)
{
buf.push("<div class=\"parameter nested\"><div class=\"title\"><div class=\"collapse-button\"><span class=\"close\">Hide child attributes</span><span class=\"open\">Show child attributes</span></div></div><div class=\"collapse-content\"><dl class=\"inner\">");
// iterate attribute.properties || []
;(function(){
  var $$obj = attribute.properties || [];
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var property = $$obj[$index];

buf.push("<div class=\"dl-row\"><div class=\"dl-row__content\"><dt><div class=\"parameter-name\">" + (jade.escape(null == (jade_interp = property.name) ? "" : jade_interp)) + "</div><div class=\"parameter-meta\">" + (jade.escape(null == (jade_interp = property.type) ? "" : jade_interp)) + "</div></dt><dd>");
if ( property.description)
{
buf.push("<p>" + (null == (jade_interp = self.markdown(property.description)) ? "" : jade_interp) + "</p>");
}
else
{
buf.push("<p></p>");
}
buf.push("</dd></div></div>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var property = $$obj[$index];

buf.push("<div class=\"dl-row\"><div class=\"dl-row__content\"><dt><div class=\"parameter-name\">" + (jade.escape(null == (jade_interp = property.name) ? "" : jade_interp)) + "</div><div class=\"parameter-meta\">" + (jade.escape(null == (jade_interp = property.type) ? "" : jade_interp)) + "</div></dt><dd>");
if ( property.description)
{
buf.push("<p>" + (null == (jade_interp = self.markdown(property.description)) ? "" : jade_interp) + "</p>");
}
else
{
buf.push("<p></p>");
}
buf.push("</dd></div></div>");
    }

  }
}).call(this);

buf.push("</dl></div></div>");
}
buf.push("</div>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var attribute = $$obj[$index];

buf.push("<div class=\"dl-row\"><div class=\"dl-row__content\"><dt><div class=\"parameter-name\">" + (jade.escape(null == (jade_interp = attribute.name) ? "" : jade_interp)) + "</div><div class=\"parameter-meta\">" + (jade.escape(null == (jade_interp = attribute.type) ? "" : jade_interp)) + "</div></dt><dd>");
if ( attribute.description)
{
buf.push("<p>" + (null == (jade_interp = self.markdown(attribute.description)) ? "" : jade_interp) + "</p>");
}
else
{
buf.push("<p></p>");
}
buf.push("</dd></div>");
if ( attribute.properties.length)
{
buf.push("<div class=\"parameter nested\"><div class=\"title\"><div class=\"collapse-button\"><span class=\"close\">Hide child attributes</span><span class=\"open\">Show child attributes</span></div></div><div class=\"collapse-content\"><dl class=\"inner\">");
// iterate attribute.properties || []
;(function(){
  var $$obj = attribute.properties || [];
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var property = $$obj[$index];

buf.push("<div class=\"dl-row\"><div class=\"dl-row__content\"><dt><div class=\"parameter-name\">" + (jade.escape(null == (jade_interp = property.name) ? "" : jade_interp)) + "</div><div class=\"parameter-meta\">" + (jade.escape(null == (jade_interp = property.type) ? "" : jade_interp)) + "</div></dt><dd>");
if ( property.description)
{
buf.push("<p>" + (null == (jade_interp = self.markdown(property.description)) ? "" : jade_interp) + "</p>");
}
else
{
buf.push("<p></p>");
}
buf.push("</dd></div></div>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var property = $$obj[$index];

buf.push("<div class=\"dl-row\"><div class=\"dl-row__content\"><dt><div class=\"parameter-name\">" + (jade.escape(null == (jade_interp = property.name) ? "" : jade_interp)) + "</div><div class=\"parameter-meta\">" + (jade.escape(null == (jade_interp = property.type) ? "" : jade_interp)) + "</div></dt><dd>");
if ( property.description)
{
buf.push("<p>" + (null == (jade_interp = self.markdown(property.description)) ? "" : jade_interp) + "</p>");
}
else
{
buf.push("<p></p>");
}
buf.push("</dd></div></div>");
    }

  }
}).call(this);

buf.push("</dl></div></div>");
}
buf.push("</div>");
    }

  }
}).call(this);

buf.push("</dl></div></div>");
}
buf.push("</div></div></div>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var action = $$obj[$index];

buf.push("<div class=\"action-wrap\">");
if ( action.examples)
{
buf.push("<div class=\"right\"><div class=\"definition\"><span" + (jade.cls(['method',action.methodLower], [null,true])) + ">" + (jade.escape(null == (jade_interp = action.method) ? "" : jade_interp)) + "</span>&nbsp;<span class=\"uri\"><span class=\"hostname\">" + (jade.escape(null == (jade_interp = self.api.host) ? "" : jade_interp)) + "</span>" + (null == (jade_interp = action.colorizedUriTemplate) ? "" : jade_interp) + "</span></div><div class=\"tabs\">");
if ( action.hasRequest)
{
buf.push("<div class=\"example-names\"><span>Request</span></div>");
// iterate action.examples
;(function(){
  var $$obj = action.examples;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var example = $$obj[$index];

// iterate example.requests
;(function(){
  var $$obj = example.requests;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var request = $$obj[$index];

buf.push("<div class=\"tab\">");
jade_mixins["RequestResponseBody"](request, false, true);
buf.push("<div class=\"tabs\"><div class=\"example-names\"><span>Response</span>");
// iterate example.responses
;(function(){
  var $$obj = example.responses;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var response = $$obj[$index];

buf.push("<span class=\"tab-button\">" + (jade.escape(null == (jade_interp = response.name) ? "" : jade_interp)) + "</span>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var response = $$obj[$index];

buf.push("<span class=\"tab-button\">" + (jade.escape(null == (jade_interp = response.name) ? "" : jade_interp)) + "</span>");
    }

  }
}).call(this);

buf.push("</div>");
// iterate example.responses
;(function(){
  var $$obj = example.responses;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var response = $$obj[$index];

buf.push("<div class=\"tab\">");
jade_mixins["RequestResponseBody"](response, false, true);
buf.push("</div>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var response = $$obj[$index];

buf.push("<div class=\"tab\">");
jade_mixins["RequestResponseBody"](response, false, true);
buf.push("</div>");
    }

  }
}).call(this);

buf.push("</div></div>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var request = $$obj[$index];

buf.push("<div class=\"tab\">");
jade_mixins["RequestResponseBody"](request, false, true);
buf.push("<div class=\"tabs\"><div class=\"example-names\"><span>Response</span>");
// iterate example.responses
;(function(){
  var $$obj = example.responses;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var response = $$obj[$index];

buf.push("<span class=\"tab-button\">" + (jade.escape(null == (jade_interp = response.name) ? "" : jade_interp)) + "</span>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var response = $$obj[$index];

buf.push("<span class=\"tab-button\">" + (jade.escape(null == (jade_interp = response.name) ? "" : jade_interp)) + "</span>");
    }

  }
}).call(this);

buf.push("</div>");
// iterate example.responses
;(function(){
  var $$obj = example.responses;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var response = $$obj[$index];

buf.push("<div class=\"tab\">");
jade_mixins["RequestResponseBody"](response, false, true);
buf.push("</div>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var response = $$obj[$index];

buf.push("<div class=\"tab\">");
jade_mixins["RequestResponseBody"](response, false, true);
buf.push("</div>");
    }

  }
}).call(this);

buf.push("</div></div>");
    }

  }
}).call(this);

    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var example = $$obj[$index];

// iterate example.requests
;(function(){
  var $$obj = example.requests;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var request = $$obj[$index];

buf.push("<div class=\"tab\">");
jade_mixins["RequestResponseBody"](request, false, true);
buf.push("<div class=\"tabs\"><div class=\"example-names\"><span>Response</span>");
// iterate example.responses
;(function(){
  var $$obj = example.responses;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var response = $$obj[$index];

buf.push("<span class=\"tab-button\">" + (jade.escape(null == (jade_interp = response.name) ? "" : jade_interp)) + "</span>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var response = $$obj[$index];

buf.push("<span class=\"tab-button\">" + (jade.escape(null == (jade_interp = response.name) ? "" : jade_interp)) + "</span>");
    }

  }
}).call(this);

buf.push("</div>");
// iterate example.responses
;(function(){
  var $$obj = example.responses;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var response = $$obj[$index];

buf.push("<div class=\"tab\">");
jade_mixins["RequestResponseBody"](response, false, true);
buf.push("</div>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var response = $$obj[$index];

buf.push("<div class=\"tab\">");
jade_mixins["RequestResponseBody"](response, false, true);
buf.push("</div>");
    }

  }
}).call(this);

buf.push("</div></div>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var request = $$obj[$index];

buf.push("<div class=\"tab\">");
jade_mixins["RequestResponseBody"](request, false, true);
buf.push("<div class=\"tabs\"><div class=\"example-names\"><span>Response</span>");
// iterate example.responses
;(function(){
  var $$obj = example.responses;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var response = $$obj[$index];

buf.push("<span class=\"tab-button\">" + (jade.escape(null == (jade_interp = response.name) ? "" : jade_interp)) + "</span>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var response = $$obj[$index];

buf.push("<span class=\"tab-button\">" + (jade.escape(null == (jade_interp = response.name) ? "" : jade_interp)) + "</span>");
    }

  }
}).call(this);

buf.push("</div>");
// iterate example.responses
;(function(){
  var $$obj = example.responses;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var response = $$obj[$index];

buf.push("<div class=\"tab\">");
jade_mixins["RequestResponseBody"](response, false, true);
buf.push("</div>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var response = $$obj[$index];

buf.push("<div class=\"tab\">");
jade_mixins["RequestResponseBody"](response, false, true);
buf.push("</div>");
    }

  }
}).call(this);

buf.push("</div></div>");
    }

  }
}).call(this);

    }

  }
}).call(this);

}
else
{
// iterate action.examples
;(function(){
  var $$obj = action.examples;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var example = $$obj[$index];

buf.push("<div class=\"tabs\"><div class=\"example-names\"><span>Response</span>");
// iterate example.responses
;(function(){
  var $$obj = example.responses;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var response = $$obj[$index];

buf.push("<span class=\"tab-button\">" + (jade.escape(null == (jade_interp = response.name) ? "" : jade_interp)) + "</span>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var response = $$obj[$index];

buf.push("<span class=\"tab-button\">" + (jade.escape(null == (jade_interp = response.name) ? "" : jade_interp)) + "</span>");
    }

  }
}).call(this);

buf.push("</div>");
// iterate example.responses
;(function(){
  var $$obj = example.responses;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var response = $$obj[$index];

buf.push("<div class=\"tab\">");
jade_mixins["RequestResponseBody"](response, false, true);
buf.push("</div>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var response = $$obj[$index];

buf.push("<div class=\"tab\">");
jade_mixins["RequestResponseBody"](response, false, true);
buf.push("</div>");
    }

  }
}).call(this);

buf.push("</div>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var example = $$obj[$index];

buf.push("<div class=\"tabs\"><div class=\"example-names\"><span>Response</span>");
// iterate example.responses
;(function(){
  var $$obj = example.responses;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var response = $$obj[$index];

buf.push("<span class=\"tab-button\">" + (jade.escape(null == (jade_interp = response.name) ? "" : jade_interp)) + "</span>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var response = $$obj[$index];

buf.push("<span class=\"tab-button\">" + (jade.escape(null == (jade_interp = response.name) ? "" : jade_interp)) + "</span>");
    }

  }
}).call(this);

buf.push("</div>");
// iterate example.responses
;(function(){
  var $$obj = example.responses;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var response = $$obj[$index];

buf.push("<div class=\"tab\">");
jade_mixins["RequestResponseBody"](response, false, true);
buf.push("</div>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var response = $$obj[$index];

buf.push("<div class=\"tab\">");
jade_mixins["RequestResponseBody"](response, false, true);
buf.push("</div>");
    }

  }
}).call(this);

buf.push("</div>");
    }

  }
}).call(this);

}
buf.push("</div></div>");
}
buf.push("<div class=\"middle\"><a" + (jade.attr("name", action.elementId, true, true)) + " class=\"anchor\"></a><h4 class=\"action-heading-name\">" + (jade.escape(null == (jade_interp = action.name) ? "" : jade_interp)) + "</h4><div" + (jade.cls(['action',action.methodLower], [null,true])) + "><h4 class=\"action-heading\"><div class=\"name\">" + (null == (jade_interp = action.name) ? "" : jade_interp) + "</div><a" + (jade.attr("href", action.elementLink, true, true)) + (jade.cls(['method',action.methodLower], [null,true])) + ">" + (jade.escape(null == (jade_interp = action.method) ? "" : jade_interp)) + "</a><code class=\"uri\">" + (jade.escape(null == (jade_interp = self.urldec(action.uriTemplate)) ? "" : jade_interp)) + "</code></h4>");
if ( action.description)
{
buf.push(null == (jade_interp = self.markdown(action.description)) ? "" : jade_interp);
}
if ( action.parameters.length)
{
jade_mixins["Parameters"](action.parameters);
}
buf.push("");
if ( action.requestAttributes.length)
{
buf.push("<div class=\"parameter\"><div class=\"title\"><strong>Request Attributes</strong></div><div class=\"parameter__content\"><dl class=\"inner\">");
// iterate action.requestAttributes || []
;(function(){
  var $$obj = action.requestAttributes || [];
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var attribute = $$obj[$index];

buf.push("<div class=\"dl-row\"><div class=\"dl-row__content\"><dt><div class=\"parameter-name\">" + (jade.escape(null == (jade_interp = attribute.name) ? "" : jade_interp)) + "</div><div class=\"parameter-meta\">" + (jade.escape(null == (jade_interp = attribute.type) ? "" : jade_interp)) + "</div></dt><dd>");
if ( attribute.description)
{
buf.push("<p>" + (null == (jade_interp = self.markdown(attribute.description)) ? "" : jade_interp) + "</p>");
}
else
{
buf.push("<p></p>");
}
buf.push("</dd></div>");
if ( attribute.properties.length)
{
buf.push("<div class=\"parameter nested\"><div class=\"title\"><div class=\"collapse-button\"><span class=\"close\">Hide child attributes</span><span class=\"open\">Show child attributes</span></div></div><div class=\"collapse-content\"><dl class=\"inner\">");
// iterate attribute.properties || []
;(function(){
  var $$obj = attribute.properties || [];
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var property = $$obj[$index];

buf.push("<div class=\"dl-row\"><div class=\"dl-row__content\"><dt><div class=\"parameter-name\">" + (jade.escape(null == (jade_interp = property.name) ? "" : jade_interp)) + "</div><div class=\"parameter-meta\">" + (jade.escape(null == (jade_interp = property.type) ? "" : jade_interp)) + "</div></dt><dd>");
if ( property.description)
{
buf.push("<p>" + (null == (jade_interp = self.markdown(property.description)) ? "" : jade_interp) + "</p>");
}
else
{
buf.push("<p></p>");
}
buf.push("</dd></div></div>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var property = $$obj[$index];

buf.push("<div class=\"dl-row\"><div class=\"dl-row__content\"><dt><div class=\"parameter-name\">" + (jade.escape(null == (jade_interp = property.name) ? "" : jade_interp)) + "</div><div class=\"parameter-meta\">" + (jade.escape(null == (jade_interp = property.type) ? "" : jade_interp)) + "</div></dt><dd>");
if ( property.description)
{
buf.push("<p>" + (null == (jade_interp = self.markdown(property.description)) ? "" : jade_interp) + "</p>");
}
else
{
buf.push("<p></p>");
}
buf.push("</dd></div></div>");
    }

  }
}).call(this);

buf.push("</dl></div></div>");
}
buf.push("</div>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var attribute = $$obj[$index];

buf.push("<div class=\"dl-row\"><div class=\"dl-row__content\"><dt><div class=\"parameter-name\">" + (jade.escape(null == (jade_interp = attribute.name) ? "" : jade_interp)) + "</div><div class=\"parameter-meta\">" + (jade.escape(null == (jade_interp = attribute.type) ? "" : jade_interp)) + "</div></dt><dd>");
if ( attribute.description)
{
buf.push("<p>" + (null == (jade_interp = self.markdown(attribute.description)) ? "" : jade_interp) + "</p>");
}
else
{
buf.push("<p></p>");
}
buf.push("</dd></div>");
if ( attribute.properties.length)
{
buf.push("<div class=\"parameter nested\"><div class=\"title\"><div class=\"collapse-button\"><span class=\"close\">Hide child attributes</span><span class=\"open\">Show child attributes</span></div></div><div class=\"collapse-content\"><dl class=\"inner\">");
// iterate attribute.properties || []
;(function(){
  var $$obj = attribute.properties || [];
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var property = $$obj[$index];

buf.push("<div class=\"dl-row\"><div class=\"dl-row__content\"><dt><div class=\"parameter-name\">" + (jade.escape(null == (jade_interp = property.name) ? "" : jade_interp)) + "</div><div class=\"parameter-meta\">" + (jade.escape(null == (jade_interp = property.type) ? "" : jade_interp)) + "</div></dt><dd>");
if ( property.description)
{
buf.push("<p>" + (null == (jade_interp = self.markdown(property.description)) ? "" : jade_interp) + "</p>");
}
else
{
buf.push("<p></p>");
}
buf.push("</dd></div></div>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var property = $$obj[$index];

buf.push("<div class=\"dl-row\"><div class=\"dl-row__content\"><dt><div class=\"parameter-name\">" + (jade.escape(null == (jade_interp = property.name) ? "" : jade_interp)) + "</div><div class=\"parameter-meta\">" + (jade.escape(null == (jade_interp = property.type) ? "" : jade_interp)) + "</div></dt><dd>");
if ( property.description)
{
buf.push("<p>" + (null == (jade_interp = self.markdown(property.description)) ? "" : jade_interp) + "</p>");
}
else
{
buf.push("<p></p>");
}
buf.push("</dd></div></div>");
    }

  }
}).call(this);

buf.push("</dl></div></div>");
}
buf.push("</div>");
    }

  }
}).call(this);

buf.push("</dl></div></div>");
}
if ( action.responseAttributes.length)
{
buf.push("<div class=\"parameter\"><div class=\"title\"><strong>Response Attributes</strong></div><div class=\"parameter__content\"><dl class=\"inner\">");
// iterate action.responseAttributes || []
;(function(){
  var $$obj = action.responseAttributes || [];
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var attribute = $$obj[$index];

buf.push("<div class=\"dl-row\"><div class=\"dl-row__content\"><dt><div class=\"parameter-name\">" + (jade.escape(null == (jade_interp = attribute.name) ? "" : jade_interp)) + "</div><div class=\"parameter-meta\">" + (jade.escape(null == (jade_interp = attribute.type) ? "" : jade_interp)) + "</div></dt><dd>");
if ( attribute.description)
{
buf.push("<p>" + (null == (jade_interp = self.markdown(attribute.description)) ? "" : jade_interp) + "</p>");
}
else
{
buf.push("<p></p>");
}
buf.push("</dd></div>");
if ( attribute.properties.length)
{
buf.push("<div class=\"parameter nested\"><div class=\"title\"><div class=\"collapse-button\"><span class=\"close\">Hide child attributes</span><span class=\"open\">Show child attributes</span></div></div><div class=\"collapse-content\"><dl class=\"inner\">");
// iterate attribute.properties || []
;(function(){
  var $$obj = attribute.properties || [];
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var property = $$obj[$index];

buf.push("<div class=\"dl-row\"><div class=\"dl-row__content\"><dt><div class=\"parameter-name\">" + (jade.escape(null == (jade_interp = property.name) ? "" : jade_interp)) + "</div><div class=\"parameter-meta\">" + (jade.escape(null == (jade_interp = property.type) ? "" : jade_interp)) + "</div></dt><dd>");
if ( property.description)
{
buf.push("<p>" + (null == (jade_interp = self.markdown(property.description)) ? "" : jade_interp) + "</p>");
}
else
{
buf.push("<p></p>");
}
buf.push("</dd></div></div>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var property = $$obj[$index];

buf.push("<div class=\"dl-row\"><div class=\"dl-row__content\"><dt><div class=\"parameter-name\">" + (jade.escape(null == (jade_interp = property.name) ? "" : jade_interp)) + "</div><div class=\"parameter-meta\">" + (jade.escape(null == (jade_interp = property.type) ? "" : jade_interp)) + "</div></dt><dd>");
if ( property.description)
{
buf.push("<p>" + (null == (jade_interp = self.markdown(property.description)) ? "" : jade_interp) + "</p>");
}
else
{
buf.push("<p></p>");
}
buf.push("</dd></div></div>");
    }

  }
}).call(this);

buf.push("</dl></div></div>");
}
buf.push("</div>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var attribute = $$obj[$index];

buf.push("<div class=\"dl-row\"><div class=\"dl-row__content\"><dt><div class=\"parameter-name\">" + (jade.escape(null == (jade_interp = attribute.name) ? "" : jade_interp)) + "</div><div class=\"parameter-meta\">" + (jade.escape(null == (jade_interp = attribute.type) ? "" : jade_interp)) + "</div></dt><dd>");
if ( attribute.description)
{
buf.push("<p>" + (null == (jade_interp = self.markdown(attribute.description)) ? "" : jade_interp) + "</p>");
}
else
{
buf.push("<p></p>");
}
buf.push("</dd></div>");
if ( attribute.properties.length)
{
buf.push("<div class=\"parameter nested\"><div class=\"title\"><div class=\"collapse-button\"><span class=\"close\">Hide child attributes</span><span class=\"open\">Show child attributes</span></div></div><div class=\"collapse-content\"><dl class=\"inner\">");
// iterate attribute.properties || []
;(function(){
  var $$obj = attribute.properties || [];
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var property = $$obj[$index];

buf.push("<div class=\"dl-row\"><div class=\"dl-row__content\"><dt><div class=\"parameter-name\">" + (jade.escape(null == (jade_interp = property.name) ? "" : jade_interp)) + "</div><div class=\"parameter-meta\">" + (jade.escape(null == (jade_interp = property.type) ? "" : jade_interp)) + "</div></dt><dd>");
if ( property.description)
{
buf.push("<p>" + (null == (jade_interp = self.markdown(property.description)) ? "" : jade_interp) + "</p>");
}
else
{
buf.push("<p></p>");
}
buf.push("</dd></div></div>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var property = $$obj[$index];

buf.push("<div class=\"dl-row\"><div class=\"dl-row__content\"><dt><div class=\"parameter-name\">" + (jade.escape(null == (jade_interp = property.name) ? "" : jade_interp)) + "</div><div class=\"parameter-meta\">" + (jade.escape(null == (jade_interp = property.type) ? "" : jade_interp)) + "</div></dt><dd>");
if ( property.description)
{
buf.push("<p>" + (null == (jade_interp = self.markdown(property.description)) ? "" : jade_interp) + "</p>");
}
else
{
buf.push("<p></p>");
}
buf.push("</dd></div></div>");
    }

  }
}).call(this);

buf.push("</dl></div></div>");
}
buf.push("</div>");
    }

  }
}).call(this);

buf.push("</dl></div></div>");
}
buf.push("</div></div></div>");
    }

  }
}).call(this);

    }

  }
}).call(this);

    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var resourceGroup = $$obj[$index];

buf.push("<div class=\"middle\"></div>");
// iterate resourceGroup.resources || []
;(function(){
  var $$obj = resourceGroup.resources || [];
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var resource = $$obj[$index];

buf.push("<div class=\"middle\"><div" + (jade.attr("id", resource.elementId, true, true)) + " class=\"resource\"><h3 class=\"resource-heading\">" + (null == (jade_interp = resource.name || ((resource.actions[0] != null) && resource.actions[0].name) || 'Resource') ? "" : jade_interp) + (jade.escape(null == (jade_interp = " ") ? "" : jade_interp)) + "<a" + (jade.attr("href", resource.elementLink, true, true)) + " class=\"permalink\">&para;</a></h3>");
if ( resource.description)
{
buf.push(null == (jade_interp = self.markdown(resource.description)) ? "" : jade_interp);
}
buf.push("</div></div>");
// iterate resource.actions || []            
;(function(){
  var $$obj = resource.actions || []            ;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var action = $$obj[$index];

buf.push("<div class=\"action-wrap\">");
if ( action.examples)
{
buf.push("<div class=\"right\"><div class=\"definition\"><span" + (jade.cls(['method',action.methodLower], [null,true])) + ">" + (jade.escape(null == (jade_interp = action.method) ? "" : jade_interp)) + "</span>&nbsp;<span class=\"uri\"><span class=\"hostname\">" + (jade.escape(null == (jade_interp = self.api.host) ? "" : jade_interp)) + "</span>" + (null == (jade_interp = action.colorizedUriTemplate) ? "" : jade_interp) + "</span></div><div class=\"tabs\">");
if ( action.hasRequest)
{
buf.push("<div class=\"example-names\"><span>Request</span></div>");
// iterate action.examples
;(function(){
  var $$obj = action.examples;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var example = $$obj[$index];

// iterate example.requests
;(function(){
  var $$obj = example.requests;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var request = $$obj[$index];

buf.push("<div class=\"tab\">");
jade_mixins["RequestResponseBody"](request, false, true);
buf.push("<div class=\"tabs\"><div class=\"example-names\"><span>Response</span>");
// iterate example.responses
;(function(){
  var $$obj = example.responses;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var response = $$obj[$index];

buf.push("<span class=\"tab-button\">" + (jade.escape(null == (jade_interp = response.name) ? "" : jade_interp)) + "</span>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var response = $$obj[$index];

buf.push("<span class=\"tab-button\">" + (jade.escape(null == (jade_interp = response.name) ? "" : jade_interp)) + "</span>");
    }

  }
}).call(this);

buf.push("</div>");
// iterate example.responses
;(function(){
  var $$obj = example.responses;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var response = $$obj[$index];

buf.push("<div class=\"tab\">");
jade_mixins["RequestResponseBody"](response, false, true);
buf.push("</div>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var response = $$obj[$index];

buf.push("<div class=\"tab\">");
jade_mixins["RequestResponseBody"](response, false, true);
buf.push("</div>");
    }

  }
}).call(this);

buf.push("</div></div>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var request = $$obj[$index];

buf.push("<div class=\"tab\">");
jade_mixins["RequestResponseBody"](request, false, true);
buf.push("<div class=\"tabs\"><div class=\"example-names\"><span>Response</span>");
// iterate example.responses
;(function(){
  var $$obj = example.responses;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var response = $$obj[$index];

buf.push("<span class=\"tab-button\">" + (jade.escape(null == (jade_interp = response.name) ? "" : jade_interp)) + "</span>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var response = $$obj[$index];

buf.push("<span class=\"tab-button\">" + (jade.escape(null == (jade_interp = response.name) ? "" : jade_interp)) + "</span>");
    }

  }
}).call(this);

buf.push("</div>");
// iterate example.responses
;(function(){
  var $$obj = example.responses;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var response = $$obj[$index];

buf.push("<div class=\"tab\">");
jade_mixins["RequestResponseBody"](response, false, true);
buf.push("</div>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var response = $$obj[$index];

buf.push("<div class=\"tab\">");
jade_mixins["RequestResponseBody"](response, false, true);
buf.push("</div>");
    }

  }
}).call(this);

buf.push("</div></div>");
    }

  }
}).call(this);

    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var example = $$obj[$index];

// iterate example.requests
;(function(){
  var $$obj = example.requests;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var request = $$obj[$index];

buf.push("<div class=\"tab\">");
jade_mixins["RequestResponseBody"](request, false, true);
buf.push("<div class=\"tabs\"><div class=\"example-names\"><span>Response</span>");
// iterate example.responses
;(function(){
  var $$obj = example.responses;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var response = $$obj[$index];

buf.push("<span class=\"tab-button\">" + (jade.escape(null == (jade_interp = response.name) ? "" : jade_interp)) + "</span>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var response = $$obj[$index];

buf.push("<span class=\"tab-button\">" + (jade.escape(null == (jade_interp = response.name) ? "" : jade_interp)) + "</span>");
    }

  }
}).call(this);

buf.push("</div>");
// iterate example.responses
;(function(){
  var $$obj = example.responses;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var response = $$obj[$index];

buf.push("<div class=\"tab\">");
jade_mixins["RequestResponseBody"](response, false, true);
buf.push("</div>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var response = $$obj[$index];

buf.push("<div class=\"tab\">");
jade_mixins["RequestResponseBody"](response, false, true);
buf.push("</div>");
    }

  }
}).call(this);

buf.push("</div></div>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var request = $$obj[$index];

buf.push("<div class=\"tab\">");
jade_mixins["RequestResponseBody"](request, false, true);
buf.push("<div class=\"tabs\"><div class=\"example-names\"><span>Response</span>");
// iterate example.responses
;(function(){
  var $$obj = example.responses;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var response = $$obj[$index];

buf.push("<span class=\"tab-button\">" + (jade.escape(null == (jade_interp = response.name) ? "" : jade_interp)) + "</span>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var response = $$obj[$index];

buf.push("<span class=\"tab-button\">" + (jade.escape(null == (jade_interp = response.name) ? "" : jade_interp)) + "</span>");
    }

  }
}).call(this);

buf.push("</div>");
// iterate example.responses
;(function(){
  var $$obj = example.responses;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var response = $$obj[$index];

buf.push("<div class=\"tab\">");
jade_mixins["RequestResponseBody"](response, false, true);
buf.push("</div>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var response = $$obj[$index];

buf.push("<div class=\"tab\">");
jade_mixins["RequestResponseBody"](response, false, true);
buf.push("</div>");
    }

  }
}).call(this);

buf.push("</div></div>");
    }

  }
}).call(this);

    }

  }
}).call(this);

}
else
{
// iterate action.examples
;(function(){
  var $$obj = action.examples;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var example = $$obj[$index];

buf.push("<div class=\"tabs\"><div class=\"example-names\"><span>Response</span>");
// iterate example.responses
;(function(){
  var $$obj = example.responses;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var response = $$obj[$index];

buf.push("<span class=\"tab-button\">" + (jade.escape(null == (jade_interp = response.name) ? "" : jade_interp)) + "</span>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var response = $$obj[$index];

buf.push("<span class=\"tab-button\">" + (jade.escape(null == (jade_interp = response.name) ? "" : jade_interp)) + "</span>");
    }

  }
}).call(this);

buf.push("</div>");
// iterate example.responses
;(function(){
  var $$obj = example.responses;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var response = $$obj[$index];

buf.push("<div class=\"tab\">");
jade_mixins["RequestResponseBody"](response, false, true);
buf.push("</div>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var response = $$obj[$index];

buf.push("<div class=\"tab\">");
jade_mixins["RequestResponseBody"](response, false, true);
buf.push("</div>");
    }

  }
}).call(this);

buf.push("</div>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var example = $$obj[$index];

buf.push("<div class=\"tabs\"><div class=\"example-names\"><span>Response</span>");
// iterate example.responses
;(function(){
  var $$obj = example.responses;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var response = $$obj[$index];

buf.push("<span class=\"tab-button\">" + (jade.escape(null == (jade_interp = response.name) ? "" : jade_interp)) + "</span>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var response = $$obj[$index];

buf.push("<span class=\"tab-button\">" + (jade.escape(null == (jade_interp = response.name) ? "" : jade_interp)) + "</span>");
    }

  }
}).call(this);

buf.push("</div>");
// iterate example.responses
;(function(){
  var $$obj = example.responses;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var response = $$obj[$index];

buf.push("<div class=\"tab\">");
jade_mixins["RequestResponseBody"](response, false, true);
buf.push("</div>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var response = $$obj[$index];

buf.push("<div class=\"tab\">");
jade_mixins["RequestResponseBody"](response, false, true);
buf.push("</div>");
    }

  }
}).call(this);

buf.push("</div>");
    }

  }
}).call(this);

}
buf.push("</div></div>");
}
buf.push("<div class=\"middle\"><a" + (jade.attr("name", action.elementId, true, true)) + " class=\"anchor\"></a><h4 class=\"action-heading-name\">" + (jade.escape(null == (jade_interp = action.name) ? "" : jade_interp)) + "</h4><div" + (jade.cls(['action',action.methodLower], [null,true])) + "><h4 class=\"action-heading\"><div class=\"name\">" + (null == (jade_interp = action.name) ? "" : jade_interp) + "</div><a" + (jade.attr("href", action.elementLink, true, true)) + (jade.cls(['method',action.methodLower], [null,true])) + ">" + (jade.escape(null == (jade_interp = action.method) ? "" : jade_interp)) + "</a><code class=\"uri\">" + (jade.escape(null == (jade_interp = self.urldec(action.uriTemplate)) ? "" : jade_interp)) + "</code></h4>");
if ( action.description)
{
buf.push(null == (jade_interp = self.markdown(action.description)) ? "" : jade_interp);
}
if ( action.parameters.length)
{
jade_mixins["Parameters"](action.parameters);
}
buf.push("");
if ( action.requestAttributes.length)
{
buf.push("<div class=\"parameter\"><div class=\"title\"><strong>Request Attributes</strong></div><div class=\"parameter__content\"><dl class=\"inner\">");
// iterate action.requestAttributes || []
;(function(){
  var $$obj = action.requestAttributes || [];
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var attribute = $$obj[$index];

buf.push("<div class=\"dl-row\"><div class=\"dl-row__content\"><dt><div class=\"parameter-name\">" + (jade.escape(null == (jade_interp = attribute.name) ? "" : jade_interp)) + "</div><div class=\"parameter-meta\">" + (jade.escape(null == (jade_interp = attribute.type) ? "" : jade_interp)) + "</div></dt><dd>");
if ( attribute.description)
{
buf.push("<p>" + (null == (jade_interp = self.markdown(attribute.description)) ? "" : jade_interp) + "</p>");
}
else
{
buf.push("<p></p>");
}
buf.push("</dd></div>");
if ( attribute.properties.length)
{
buf.push("<div class=\"parameter nested\"><div class=\"title\"><div class=\"collapse-button\"><span class=\"close\">Hide child attributes</span><span class=\"open\">Show child attributes</span></div></div><div class=\"collapse-content\"><dl class=\"inner\">");
// iterate attribute.properties || []
;(function(){
  var $$obj = attribute.properties || [];
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var property = $$obj[$index];

buf.push("<div class=\"dl-row\"><div class=\"dl-row__content\"><dt><div class=\"parameter-name\">" + (jade.escape(null == (jade_interp = property.name) ? "" : jade_interp)) + "</div><div class=\"parameter-meta\">" + (jade.escape(null == (jade_interp = property.type) ? "" : jade_interp)) + "</div></dt><dd>");
if ( property.description)
{
buf.push("<p>" + (null == (jade_interp = self.markdown(property.description)) ? "" : jade_interp) + "</p>");
}
else
{
buf.push("<p></p>");
}
buf.push("</dd></div></div>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var property = $$obj[$index];

buf.push("<div class=\"dl-row\"><div class=\"dl-row__content\"><dt><div class=\"parameter-name\">" + (jade.escape(null == (jade_interp = property.name) ? "" : jade_interp)) + "</div><div class=\"parameter-meta\">" + (jade.escape(null == (jade_interp = property.type) ? "" : jade_interp)) + "</div></dt><dd>");
if ( property.description)
{
buf.push("<p>" + (null == (jade_interp = self.markdown(property.description)) ? "" : jade_interp) + "</p>");
}
else
{
buf.push("<p></p>");
}
buf.push("</dd></div></div>");
    }

  }
}).call(this);

buf.push("</dl></div></div>");
}
buf.push("</div>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var attribute = $$obj[$index];

buf.push("<div class=\"dl-row\"><div class=\"dl-row__content\"><dt><div class=\"parameter-name\">" + (jade.escape(null == (jade_interp = attribute.name) ? "" : jade_interp)) + "</div><div class=\"parameter-meta\">" + (jade.escape(null == (jade_interp = attribute.type) ? "" : jade_interp)) + "</div></dt><dd>");
if ( attribute.description)
{
buf.push("<p>" + (null == (jade_interp = self.markdown(attribute.description)) ? "" : jade_interp) + "</p>");
}
else
{
buf.push("<p></p>");
}
buf.push("</dd></div>");
if ( attribute.properties.length)
{
buf.push("<div class=\"parameter nested\"><div class=\"title\"><div class=\"collapse-button\"><span class=\"close\">Hide child attributes</span><span class=\"open\">Show child attributes</span></div></div><div class=\"collapse-content\"><dl class=\"inner\">");
// iterate attribute.properties || []
;(function(){
  var $$obj = attribute.properties || [];
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var property = $$obj[$index];

buf.push("<div class=\"dl-row\"><div class=\"dl-row__content\"><dt><div class=\"parameter-name\">" + (jade.escape(null == (jade_interp = property.name) ? "" : jade_interp)) + "</div><div class=\"parameter-meta\">" + (jade.escape(null == (jade_interp = property.type) ? "" : jade_interp)) + "</div></dt><dd>");
if ( property.description)
{
buf.push("<p>" + (null == (jade_interp = self.markdown(property.description)) ? "" : jade_interp) + "</p>");
}
else
{
buf.push("<p></p>");
}
buf.push("</dd></div></div>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var property = $$obj[$index];

buf.push("<div class=\"dl-row\"><div class=\"dl-row__content\"><dt><div class=\"parameter-name\">" + (jade.escape(null == (jade_interp = property.name) ? "" : jade_interp)) + "</div><div class=\"parameter-meta\">" + (jade.escape(null == (jade_interp = property.type) ? "" : jade_interp)) + "</div></dt><dd>");
if ( property.description)
{
buf.push("<p>" + (null == (jade_interp = self.markdown(property.description)) ? "" : jade_interp) + "</p>");
}
else
{
buf.push("<p></p>");
}
buf.push("</dd></div></div>");
    }

  }
}).call(this);

buf.push("</dl></div></div>");
}
buf.push("</div>");
    }

  }
}).call(this);

buf.push("</dl></div></div>");
}
if ( action.responseAttributes.length)
{
buf.push("<div class=\"parameter\"><div class=\"title\"><strong>Response Attributes</strong></div><div class=\"parameter__content\"><dl class=\"inner\">");
// iterate action.responseAttributes || []
;(function(){
  var $$obj = action.responseAttributes || [];
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var attribute = $$obj[$index];

buf.push("<div class=\"dl-row\"><div class=\"dl-row__content\"><dt><div class=\"parameter-name\">" + (jade.escape(null == (jade_interp = attribute.name) ? "" : jade_interp)) + "</div><div class=\"parameter-meta\">" + (jade.escape(null == (jade_interp = attribute.type) ? "" : jade_interp)) + "</div></dt><dd>");
if ( attribute.description)
{
buf.push("<p>" + (null == (jade_interp = self.markdown(attribute.description)) ? "" : jade_interp) + "</p>");
}
else
{
buf.push("<p></p>");
}
buf.push("</dd></div>");
if ( attribute.properties.length)
{
buf.push("<div class=\"parameter nested\"><div class=\"title\"><div class=\"collapse-button\"><span class=\"close\">Hide child attributes</span><span class=\"open\">Show child attributes</span></div></div><div class=\"collapse-content\"><dl class=\"inner\">");
// iterate attribute.properties || []
;(function(){
  var $$obj = attribute.properties || [];
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var property = $$obj[$index];

buf.push("<div class=\"dl-row\"><div class=\"dl-row__content\"><dt><div class=\"parameter-name\">" + (jade.escape(null == (jade_interp = property.name) ? "" : jade_interp)) + "</div><div class=\"parameter-meta\">" + (jade.escape(null == (jade_interp = property.type) ? "" : jade_interp)) + "</div></dt><dd>");
if ( property.description)
{
buf.push("<p>" + (null == (jade_interp = self.markdown(property.description)) ? "" : jade_interp) + "</p>");
}
else
{
buf.push("<p></p>");
}
buf.push("</dd></div></div>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var property = $$obj[$index];

buf.push("<div class=\"dl-row\"><div class=\"dl-row__content\"><dt><div class=\"parameter-name\">" + (jade.escape(null == (jade_interp = property.name) ? "" : jade_interp)) + "</div><div class=\"parameter-meta\">" + (jade.escape(null == (jade_interp = property.type) ? "" : jade_interp)) + "</div></dt><dd>");
if ( property.description)
{
buf.push("<p>" + (null == (jade_interp = self.markdown(property.description)) ? "" : jade_interp) + "</p>");
}
else
{
buf.push("<p></p>");
}
buf.push("</dd></div></div>");
    }

  }
}).call(this);

buf.push("</dl></div></div>");
}
buf.push("</div>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var attribute = $$obj[$index];

buf.push("<div class=\"dl-row\"><div class=\"dl-row__content\"><dt><div class=\"parameter-name\">" + (jade.escape(null == (jade_interp = attribute.name) ? "" : jade_interp)) + "</div><div class=\"parameter-meta\">" + (jade.escape(null == (jade_interp = attribute.type) ? "" : jade_interp)) + "</div></dt><dd>");
if ( attribute.description)
{
buf.push("<p>" + (null == (jade_interp = self.markdown(attribute.description)) ? "" : jade_interp) + "</p>");
}
else
{
buf.push("<p></p>");
}
buf.push("</dd></div>");
if ( attribute.properties.length)
{
buf.push("<div class=\"parameter nested\"><div class=\"title\"><div class=\"collapse-button\"><span class=\"close\">Hide child attributes</span><span class=\"open\">Show child attributes</span></div></div><div class=\"collapse-content\"><dl class=\"inner\">");
// iterate attribute.properties || []
;(function(){
  var $$obj = attribute.properties || [];
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var property = $$obj[$index];

buf.push("<div class=\"dl-row\"><div class=\"dl-row__content\"><dt><div class=\"parameter-name\">" + (jade.escape(null == (jade_interp = property.name) ? "" : jade_interp)) + "</div><div class=\"parameter-meta\">" + (jade.escape(null == (jade_interp = property.type) ? "" : jade_interp)) + "</div></dt><dd>");
if ( property.description)
{
buf.push("<p>" + (null == (jade_interp = self.markdown(property.description)) ? "" : jade_interp) + "</p>");
}
else
{
buf.push("<p></p>");
}
buf.push("</dd></div></div>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var property = $$obj[$index];

buf.push("<div class=\"dl-row\"><div class=\"dl-row__content\"><dt><div class=\"parameter-name\">" + (jade.escape(null == (jade_interp = property.name) ? "" : jade_interp)) + "</div><div class=\"parameter-meta\">" + (jade.escape(null == (jade_interp = property.type) ? "" : jade_interp)) + "</div></dt><dd>");
if ( property.description)
{
buf.push("<p>" + (null == (jade_interp = self.markdown(property.description)) ? "" : jade_interp) + "</p>");
}
else
{
buf.push("<p></p>");
}
buf.push("</dd></div></div>");
    }

  }
}).call(this);

buf.push("</dl></div></div>");
}
buf.push("</div>");
    }

  }
}).call(this);

buf.push("</dl></div></div>");
}
buf.push("</div></div></div>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var action = $$obj[$index];

buf.push("<div class=\"action-wrap\">");
if ( action.examples)
{
buf.push("<div class=\"right\"><div class=\"definition\"><span" + (jade.cls(['method',action.methodLower], [null,true])) + ">" + (jade.escape(null == (jade_interp = action.method) ? "" : jade_interp)) + "</span>&nbsp;<span class=\"uri\"><span class=\"hostname\">" + (jade.escape(null == (jade_interp = self.api.host) ? "" : jade_interp)) + "</span>" + (null == (jade_interp = action.colorizedUriTemplate) ? "" : jade_interp) + "</span></div><div class=\"tabs\">");
if ( action.hasRequest)
{
buf.push("<div class=\"example-names\"><span>Request</span></div>");
// iterate action.examples
;(function(){
  var $$obj = action.examples;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var example = $$obj[$index];

// iterate example.requests
;(function(){
  var $$obj = example.requests;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var request = $$obj[$index];

buf.push("<div class=\"tab\">");
jade_mixins["RequestResponseBody"](request, false, true);
buf.push("<div class=\"tabs\"><div class=\"example-names\"><span>Response</span>");
// iterate example.responses
;(function(){
  var $$obj = example.responses;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var response = $$obj[$index];

buf.push("<span class=\"tab-button\">" + (jade.escape(null == (jade_interp = response.name) ? "" : jade_interp)) + "</span>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var response = $$obj[$index];

buf.push("<span class=\"tab-button\">" + (jade.escape(null == (jade_interp = response.name) ? "" : jade_interp)) + "</span>");
    }

  }
}).call(this);

buf.push("</div>");
// iterate example.responses
;(function(){
  var $$obj = example.responses;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var response = $$obj[$index];

buf.push("<div class=\"tab\">");
jade_mixins["RequestResponseBody"](response, false, true);
buf.push("</div>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var response = $$obj[$index];

buf.push("<div class=\"tab\">");
jade_mixins["RequestResponseBody"](response, false, true);
buf.push("</div>");
    }

  }
}).call(this);

buf.push("</div></div>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var request = $$obj[$index];

buf.push("<div class=\"tab\">");
jade_mixins["RequestResponseBody"](request, false, true);
buf.push("<div class=\"tabs\"><div class=\"example-names\"><span>Response</span>");
// iterate example.responses
;(function(){
  var $$obj = example.responses;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var response = $$obj[$index];

buf.push("<span class=\"tab-button\">" + (jade.escape(null == (jade_interp = response.name) ? "" : jade_interp)) + "</span>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var response = $$obj[$index];

buf.push("<span class=\"tab-button\">" + (jade.escape(null == (jade_interp = response.name) ? "" : jade_interp)) + "</span>");
    }

  }
}).call(this);

buf.push("</div>");
// iterate example.responses
;(function(){
  var $$obj = example.responses;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var response = $$obj[$index];

buf.push("<div class=\"tab\">");
jade_mixins["RequestResponseBody"](response, false, true);
buf.push("</div>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var response = $$obj[$index];

buf.push("<div class=\"tab\">");
jade_mixins["RequestResponseBody"](response, false, true);
buf.push("</div>");
    }

  }
}).call(this);

buf.push("</div></div>");
    }

  }
}).call(this);

    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var example = $$obj[$index];

// iterate example.requests
;(function(){
  var $$obj = example.requests;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var request = $$obj[$index];

buf.push("<div class=\"tab\">");
jade_mixins["RequestResponseBody"](request, false, true);
buf.push("<div class=\"tabs\"><div class=\"example-names\"><span>Response</span>");
// iterate example.responses
;(function(){
  var $$obj = example.responses;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var response = $$obj[$index];

buf.push("<span class=\"tab-button\">" + (jade.escape(null == (jade_interp = response.name) ? "" : jade_interp)) + "</span>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var response = $$obj[$index];

buf.push("<span class=\"tab-button\">" + (jade.escape(null == (jade_interp = response.name) ? "" : jade_interp)) + "</span>");
    }

  }
}).call(this);

buf.push("</div>");
// iterate example.responses
;(function(){
  var $$obj = example.responses;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var response = $$obj[$index];

buf.push("<div class=\"tab\">");
jade_mixins["RequestResponseBody"](response, false, true);
buf.push("</div>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var response = $$obj[$index];

buf.push("<div class=\"tab\">");
jade_mixins["RequestResponseBody"](response, false, true);
buf.push("</div>");
    }

  }
}).call(this);

buf.push("</div></div>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var request = $$obj[$index];

buf.push("<div class=\"tab\">");
jade_mixins["RequestResponseBody"](request, false, true);
buf.push("<div class=\"tabs\"><div class=\"example-names\"><span>Response</span>");
// iterate example.responses
;(function(){
  var $$obj = example.responses;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var response = $$obj[$index];

buf.push("<span class=\"tab-button\">" + (jade.escape(null == (jade_interp = response.name) ? "" : jade_interp)) + "</span>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var response = $$obj[$index];

buf.push("<span class=\"tab-button\">" + (jade.escape(null == (jade_interp = response.name) ? "" : jade_interp)) + "</span>");
    }

  }
}).call(this);

buf.push("</div>");
// iterate example.responses
;(function(){
  var $$obj = example.responses;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var response = $$obj[$index];

buf.push("<div class=\"tab\">");
jade_mixins["RequestResponseBody"](response, false, true);
buf.push("</div>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var response = $$obj[$index];

buf.push("<div class=\"tab\">");
jade_mixins["RequestResponseBody"](response, false, true);
buf.push("</div>");
    }

  }
}).call(this);

buf.push("</div></div>");
    }

  }
}).call(this);

    }

  }
}).call(this);

}
else
{
// iterate action.examples
;(function(){
  var $$obj = action.examples;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var example = $$obj[$index];

buf.push("<div class=\"tabs\"><div class=\"example-names\"><span>Response</span>");
// iterate example.responses
;(function(){
  var $$obj = example.responses;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var response = $$obj[$index];

buf.push("<span class=\"tab-button\">" + (jade.escape(null == (jade_interp = response.name) ? "" : jade_interp)) + "</span>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var response = $$obj[$index];

buf.push("<span class=\"tab-button\">" + (jade.escape(null == (jade_interp = response.name) ? "" : jade_interp)) + "</span>");
    }

  }
}).call(this);

buf.push("</div>");
// iterate example.responses
;(function(){
  var $$obj = example.responses;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var response = $$obj[$index];

buf.push("<div class=\"tab\">");
jade_mixins["RequestResponseBody"](response, false, true);
buf.push("</div>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var response = $$obj[$index];

buf.push("<div class=\"tab\">");
jade_mixins["RequestResponseBody"](response, false, true);
buf.push("</div>");
    }

  }
}).call(this);

buf.push("</div>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var example = $$obj[$index];

buf.push("<div class=\"tabs\"><div class=\"example-names\"><span>Response</span>");
// iterate example.responses
;(function(){
  var $$obj = example.responses;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var response = $$obj[$index];

buf.push("<span class=\"tab-button\">" + (jade.escape(null == (jade_interp = response.name) ? "" : jade_interp)) + "</span>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var response = $$obj[$index];

buf.push("<span class=\"tab-button\">" + (jade.escape(null == (jade_interp = response.name) ? "" : jade_interp)) + "</span>");
    }

  }
}).call(this);

buf.push("</div>");
// iterate example.responses
;(function(){
  var $$obj = example.responses;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var response = $$obj[$index];

buf.push("<div class=\"tab\">");
jade_mixins["RequestResponseBody"](response, false, true);
buf.push("</div>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var response = $$obj[$index];

buf.push("<div class=\"tab\">");
jade_mixins["RequestResponseBody"](response, false, true);
buf.push("</div>");
    }

  }
}).call(this);

buf.push("</div>");
    }

  }
}).call(this);

}
buf.push("</div></div>");
}
buf.push("<div class=\"middle\"><a" + (jade.attr("name", action.elementId, true, true)) + " class=\"anchor\"></a><h4 class=\"action-heading-name\">" + (jade.escape(null == (jade_interp = action.name) ? "" : jade_interp)) + "</h4><div" + (jade.cls(['action',action.methodLower], [null,true])) + "><h4 class=\"action-heading\"><div class=\"name\">" + (null == (jade_interp = action.name) ? "" : jade_interp) + "</div><a" + (jade.attr("href", action.elementLink, true, true)) + (jade.cls(['method',action.methodLower], [null,true])) + ">" + (jade.escape(null == (jade_interp = action.method) ? "" : jade_interp)) + "</a><code class=\"uri\">" + (jade.escape(null == (jade_interp = self.urldec(action.uriTemplate)) ? "" : jade_interp)) + "</code></h4>");
if ( action.description)
{
buf.push(null == (jade_interp = self.markdown(action.description)) ? "" : jade_interp);
}
if ( action.parameters.length)
{
jade_mixins["Parameters"](action.parameters);
}
buf.push("");
if ( action.requestAttributes.length)
{
buf.push("<div class=\"parameter\"><div class=\"title\"><strong>Request Attributes</strong></div><div class=\"parameter__content\"><dl class=\"inner\">");
// iterate action.requestAttributes || []
;(function(){
  var $$obj = action.requestAttributes || [];
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var attribute = $$obj[$index];

buf.push("<div class=\"dl-row\"><div class=\"dl-row__content\"><dt><div class=\"parameter-name\">" + (jade.escape(null == (jade_interp = attribute.name) ? "" : jade_interp)) + "</div><div class=\"parameter-meta\">" + (jade.escape(null == (jade_interp = attribute.type) ? "" : jade_interp)) + "</div></dt><dd>");
if ( attribute.description)
{
buf.push("<p>" + (null == (jade_interp = self.markdown(attribute.description)) ? "" : jade_interp) + "</p>");
}
else
{
buf.push("<p></p>");
}
buf.push("</dd></div>");
if ( attribute.properties.length)
{
buf.push("<div class=\"parameter nested\"><div class=\"title\"><div class=\"collapse-button\"><span class=\"close\">Hide child attributes</span><span class=\"open\">Show child attributes</span></div></div><div class=\"collapse-content\"><dl class=\"inner\">");
// iterate attribute.properties || []
;(function(){
  var $$obj = attribute.properties || [];
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var property = $$obj[$index];

buf.push("<div class=\"dl-row\"><div class=\"dl-row__content\"><dt><div class=\"parameter-name\">" + (jade.escape(null == (jade_interp = property.name) ? "" : jade_interp)) + "</div><div class=\"parameter-meta\">" + (jade.escape(null == (jade_interp = property.type) ? "" : jade_interp)) + "</div></dt><dd>");
if ( property.description)
{
buf.push("<p>" + (null == (jade_interp = self.markdown(property.description)) ? "" : jade_interp) + "</p>");
}
else
{
buf.push("<p></p>");
}
buf.push("</dd></div></div>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var property = $$obj[$index];

buf.push("<div class=\"dl-row\"><div class=\"dl-row__content\"><dt><div class=\"parameter-name\">" + (jade.escape(null == (jade_interp = property.name) ? "" : jade_interp)) + "</div><div class=\"parameter-meta\">" + (jade.escape(null == (jade_interp = property.type) ? "" : jade_interp)) + "</div></dt><dd>");
if ( property.description)
{
buf.push("<p>" + (null == (jade_interp = self.markdown(property.description)) ? "" : jade_interp) + "</p>");
}
else
{
buf.push("<p></p>");
}
buf.push("</dd></div></div>");
    }

  }
}).call(this);

buf.push("</dl></div></div>");
}
buf.push("</div>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var attribute = $$obj[$index];

buf.push("<div class=\"dl-row\"><div class=\"dl-row__content\"><dt><div class=\"parameter-name\">" + (jade.escape(null == (jade_interp = attribute.name) ? "" : jade_interp)) + "</div><div class=\"parameter-meta\">" + (jade.escape(null == (jade_interp = attribute.type) ? "" : jade_interp)) + "</div></dt><dd>");
if ( attribute.description)
{
buf.push("<p>" + (null == (jade_interp = self.markdown(attribute.description)) ? "" : jade_interp) + "</p>");
}
else
{
buf.push("<p></p>");
}
buf.push("</dd></div>");
if ( attribute.properties.length)
{
buf.push("<div class=\"parameter nested\"><div class=\"title\"><div class=\"collapse-button\"><span class=\"close\">Hide child attributes</span><span class=\"open\">Show child attributes</span></div></div><div class=\"collapse-content\"><dl class=\"inner\">");
// iterate attribute.properties || []
;(function(){
  var $$obj = attribute.properties || [];
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var property = $$obj[$index];

buf.push("<div class=\"dl-row\"><div class=\"dl-row__content\"><dt><div class=\"parameter-name\">" + (jade.escape(null == (jade_interp = property.name) ? "" : jade_interp)) + "</div><div class=\"parameter-meta\">" + (jade.escape(null == (jade_interp = property.type) ? "" : jade_interp)) + "</div></dt><dd>");
if ( property.description)
{
buf.push("<p>" + (null == (jade_interp = self.markdown(property.description)) ? "" : jade_interp) + "</p>");
}
else
{
buf.push("<p></p>");
}
buf.push("</dd></div></div>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var property = $$obj[$index];

buf.push("<div class=\"dl-row\"><div class=\"dl-row__content\"><dt><div class=\"parameter-name\">" + (jade.escape(null == (jade_interp = property.name) ? "" : jade_interp)) + "</div><div class=\"parameter-meta\">" + (jade.escape(null == (jade_interp = property.type) ? "" : jade_interp)) + "</div></dt><dd>");
if ( property.description)
{
buf.push("<p>" + (null == (jade_interp = self.markdown(property.description)) ? "" : jade_interp) + "</p>");
}
else
{
buf.push("<p></p>");
}
buf.push("</dd></div></div>");
    }

  }
}).call(this);

buf.push("</dl></div></div>");
}
buf.push("</div>");
    }

  }
}).call(this);

buf.push("</dl></div></div>");
}
if ( action.responseAttributes.length)
{
buf.push("<div class=\"parameter\"><div class=\"title\"><strong>Response Attributes</strong></div><div class=\"parameter__content\"><dl class=\"inner\">");
// iterate action.responseAttributes || []
;(function(){
  var $$obj = action.responseAttributes || [];
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var attribute = $$obj[$index];

buf.push("<div class=\"dl-row\"><div class=\"dl-row__content\"><dt><div class=\"parameter-name\">" + (jade.escape(null == (jade_interp = attribute.name) ? "" : jade_interp)) + "</div><div class=\"parameter-meta\">" + (jade.escape(null == (jade_interp = attribute.type) ? "" : jade_interp)) + "</div></dt><dd>");
if ( attribute.description)
{
buf.push("<p>" + (null == (jade_interp = self.markdown(attribute.description)) ? "" : jade_interp) + "</p>");
}
else
{
buf.push("<p></p>");
}
buf.push("</dd></div>");
if ( attribute.properties.length)
{
buf.push("<div class=\"parameter nested\"><div class=\"title\"><div class=\"collapse-button\"><span class=\"close\">Hide child attributes</span><span class=\"open\">Show child attributes</span></div></div><div class=\"collapse-content\"><dl class=\"inner\">");
// iterate attribute.properties || []
;(function(){
  var $$obj = attribute.properties || [];
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var property = $$obj[$index];

buf.push("<div class=\"dl-row\"><div class=\"dl-row__content\"><dt><div class=\"parameter-name\">" + (jade.escape(null == (jade_interp = property.name) ? "" : jade_interp)) + "</div><div class=\"parameter-meta\">" + (jade.escape(null == (jade_interp = property.type) ? "" : jade_interp)) + "</div></dt><dd>");
if ( property.description)
{
buf.push("<p>" + (null == (jade_interp = self.markdown(property.description)) ? "" : jade_interp) + "</p>");
}
else
{
buf.push("<p></p>");
}
buf.push("</dd></div></div>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var property = $$obj[$index];

buf.push("<div class=\"dl-row\"><div class=\"dl-row__content\"><dt><div class=\"parameter-name\">" + (jade.escape(null == (jade_interp = property.name) ? "" : jade_interp)) + "</div><div class=\"parameter-meta\">" + (jade.escape(null == (jade_interp = property.type) ? "" : jade_interp)) + "</div></dt><dd>");
if ( property.description)
{
buf.push("<p>" + (null == (jade_interp = self.markdown(property.description)) ? "" : jade_interp) + "</p>");
}
else
{
buf.push("<p></p>");
}
buf.push("</dd></div></div>");
    }

  }
}).call(this);

buf.push("</dl></div></div>");
}
buf.push("</div>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var attribute = $$obj[$index];

buf.push("<div class=\"dl-row\"><div class=\"dl-row__content\"><dt><div class=\"parameter-name\">" + (jade.escape(null == (jade_interp = attribute.name) ? "" : jade_interp)) + "</div><div class=\"parameter-meta\">" + (jade.escape(null == (jade_interp = attribute.type) ? "" : jade_interp)) + "</div></dt><dd>");
if ( attribute.description)
{
buf.push("<p>" + (null == (jade_interp = self.markdown(attribute.description)) ? "" : jade_interp) + "</p>");
}
else
{
buf.push("<p></p>");
}
buf.push("</dd></div>");
if ( attribute.properties.length)
{
buf.push("<div class=\"parameter nested\"><div class=\"title\"><div class=\"collapse-button\"><span class=\"close\">Hide child attributes</span><span class=\"open\">Show child attributes</span></div></div><div class=\"collapse-content\"><dl class=\"inner\">");
// iterate attribute.properties || []
;(function(){
  var $$obj = attribute.properties || [];
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var property = $$obj[$index];

buf.push("<div class=\"dl-row\"><div class=\"dl-row__content\"><dt><div class=\"parameter-name\">" + (jade.escape(null == (jade_interp = property.name) ? "" : jade_interp)) + "</div><div class=\"parameter-meta\">" + (jade.escape(null == (jade_interp = property.type) ? "" : jade_interp)) + "</div></dt><dd>");
if ( property.description)
{
buf.push("<p>" + (null == (jade_interp = self.markdown(property.description)) ? "" : jade_interp) + "</p>");
}
else
{
buf.push("<p></p>");
}
buf.push("</dd></div></div>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var property = $$obj[$index];

buf.push("<div class=\"dl-row\"><div class=\"dl-row__content\"><dt><div class=\"parameter-name\">" + (jade.escape(null == (jade_interp = property.name) ? "" : jade_interp)) + "</div><div class=\"parameter-meta\">" + (jade.escape(null == (jade_interp = property.type) ? "" : jade_interp)) + "</div></dt><dd>");
if ( property.description)
{
buf.push("<p>" + (null == (jade_interp = self.markdown(property.description)) ? "" : jade_interp) + "</p>");
}
else
{
buf.push("<p></p>");
}
buf.push("</dd></div></div>");
    }

  }
}).call(this);

buf.push("</dl></div></div>");
}
buf.push("</div>");
    }

  }
}).call(this);

buf.push("</dl></div></div>");
}
buf.push("</div></div></div>");
    }

  }
}).call(this);

    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var resource = $$obj[$index];

buf.push("<div class=\"middle\"><div" + (jade.attr("id", resource.elementId, true, true)) + " class=\"resource\"><h3 class=\"resource-heading\">" + (null == (jade_interp = resource.name || ((resource.actions[0] != null) && resource.actions[0].name) || 'Resource') ? "" : jade_interp) + (jade.escape(null == (jade_interp = " ") ? "" : jade_interp)) + "<a" + (jade.attr("href", resource.elementLink, true, true)) + " class=\"permalink\">&para;</a></h3>");
if ( resource.description)
{
buf.push(null == (jade_interp = self.markdown(resource.description)) ? "" : jade_interp);
}
buf.push("</div></div>");
// iterate resource.actions || []            
;(function(){
  var $$obj = resource.actions || []            ;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var action = $$obj[$index];

buf.push("<div class=\"action-wrap\">");
if ( action.examples)
{
buf.push("<div class=\"right\"><div class=\"definition\"><span" + (jade.cls(['method',action.methodLower], [null,true])) + ">" + (jade.escape(null == (jade_interp = action.method) ? "" : jade_interp)) + "</span>&nbsp;<span class=\"uri\"><span class=\"hostname\">" + (jade.escape(null == (jade_interp = self.api.host) ? "" : jade_interp)) + "</span>" + (null == (jade_interp = action.colorizedUriTemplate) ? "" : jade_interp) + "</span></div><div class=\"tabs\">");
if ( action.hasRequest)
{
buf.push("<div class=\"example-names\"><span>Request</span></div>");
// iterate action.examples
;(function(){
  var $$obj = action.examples;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var example = $$obj[$index];

// iterate example.requests
;(function(){
  var $$obj = example.requests;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var request = $$obj[$index];

buf.push("<div class=\"tab\">");
jade_mixins["RequestResponseBody"](request, false, true);
buf.push("<div class=\"tabs\"><div class=\"example-names\"><span>Response</span>");
// iterate example.responses
;(function(){
  var $$obj = example.responses;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var response = $$obj[$index];

buf.push("<span class=\"tab-button\">" + (jade.escape(null == (jade_interp = response.name) ? "" : jade_interp)) + "</span>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var response = $$obj[$index];

buf.push("<span class=\"tab-button\">" + (jade.escape(null == (jade_interp = response.name) ? "" : jade_interp)) + "</span>");
    }

  }
}).call(this);

buf.push("</div>");
// iterate example.responses
;(function(){
  var $$obj = example.responses;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var response = $$obj[$index];

buf.push("<div class=\"tab\">");
jade_mixins["RequestResponseBody"](response, false, true);
buf.push("</div>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var response = $$obj[$index];

buf.push("<div class=\"tab\">");
jade_mixins["RequestResponseBody"](response, false, true);
buf.push("</div>");
    }

  }
}).call(this);

buf.push("</div></div>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var request = $$obj[$index];

buf.push("<div class=\"tab\">");
jade_mixins["RequestResponseBody"](request, false, true);
buf.push("<div class=\"tabs\"><div class=\"example-names\"><span>Response</span>");
// iterate example.responses
;(function(){
  var $$obj = example.responses;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var response = $$obj[$index];

buf.push("<span class=\"tab-button\">" + (jade.escape(null == (jade_interp = response.name) ? "" : jade_interp)) + "</span>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var response = $$obj[$index];

buf.push("<span class=\"tab-button\">" + (jade.escape(null == (jade_interp = response.name) ? "" : jade_interp)) + "</span>");
    }

  }
}).call(this);

buf.push("</div>");
// iterate example.responses
;(function(){
  var $$obj = example.responses;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var response = $$obj[$index];

buf.push("<div class=\"tab\">");
jade_mixins["RequestResponseBody"](response, false, true);
buf.push("</div>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var response = $$obj[$index];

buf.push("<div class=\"tab\">");
jade_mixins["RequestResponseBody"](response, false, true);
buf.push("</div>");
    }

  }
}).call(this);

buf.push("</div></div>");
    }

  }
}).call(this);

    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var example = $$obj[$index];

// iterate example.requests
;(function(){
  var $$obj = example.requests;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var request = $$obj[$index];

buf.push("<div class=\"tab\">");
jade_mixins["RequestResponseBody"](request, false, true);
buf.push("<div class=\"tabs\"><div class=\"example-names\"><span>Response</span>");
// iterate example.responses
;(function(){
  var $$obj = example.responses;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var response = $$obj[$index];

buf.push("<span class=\"tab-button\">" + (jade.escape(null == (jade_interp = response.name) ? "" : jade_interp)) + "</span>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var response = $$obj[$index];

buf.push("<span class=\"tab-button\">" + (jade.escape(null == (jade_interp = response.name) ? "" : jade_interp)) + "</span>");
    }

  }
}).call(this);

buf.push("</div>");
// iterate example.responses
;(function(){
  var $$obj = example.responses;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var response = $$obj[$index];

buf.push("<div class=\"tab\">");
jade_mixins["RequestResponseBody"](response, false, true);
buf.push("</div>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var response = $$obj[$index];

buf.push("<div class=\"tab\">");
jade_mixins["RequestResponseBody"](response, false, true);
buf.push("</div>");
    }

  }
}).call(this);

buf.push("</div></div>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var request = $$obj[$index];

buf.push("<div class=\"tab\">");
jade_mixins["RequestResponseBody"](request, false, true);
buf.push("<div class=\"tabs\"><div class=\"example-names\"><span>Response</span>");
// iterate example.responses
;(function(){
  var $$obj = example.responses;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var response = $$obj[$index];

buf.push("<span class=\"tab-button\">" + (jade.escape(null == (jade_interp = response.name) ? "" : jade_interp)) + "</span>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var response = $$obj[$index];

buf.push("<span class=\"tab-button\">" + (jade.escape(null == (jade_interp = response.name) ? "" : jade_interp)) + "</span>");
    }

  }
}).call(this);

buf.push("</div>");
// iterate example.responses
;(function(){
  var $$obj = example.responses;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var response = $$obj[$index];

buf.push("<div class=\"tab\">");
jade_mixins["RequestResponseBody"](response, false, true);
buf.push("</div>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var response = $$obj[$index];

buf.push("<div class=\"tab\">");
jade_mixins["RequestResponseBody"](response, false, true);
buf.push("</div>");
    }

  }
}).call(this);

buf.push("</div></div>");
    }

  }
}).call(this);

    }

  }
}).call(this);

}
else
{
// iterate action.examples
;(function(){
  var $$obj = action.examples;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var example = $$obj[$index];

buf.push("<div class=\"tabs\"><div class=\"example-names\"><span>Response</span>");
// iterate example.responses
;(function(){
  var $$obj = example.responses;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var response = $$obj[$index];

buf.push("<span class=\"tab-button\">" + (jade.escape(null == (jade_interp = response.name) ? "" : jade_interp)) + "</span>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var response = $$obj[$index];

buf.push("<span class=\"tab-button\">" + (jade.escape(null == (jade_interp = response.name) ? "" : jade_interp)) + "</span>");
    }

  }
}).call(this);

buf.push("</div>");
// iterate example.responses
;(function(){
  var $$obj = example.responses;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var response = $$obj[$index];

buf.push("<div class=\"tab\">");
jade_mixins["RequestResponseBody"](response, false, true);
buf.push("</div>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var response = $$obj[$index];

buf.push("<div class=\"tab\">");
jade_mixins["RequestResponseBody"](response, false, true);
buf.push("</div>");
    }

  }
}).call(this);

buf.push("</div>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var example = $$obj[$index];

buf.push("<div class=\"tabs\"><div class=\"example-names\"><span>Response</span>");
// iterate example.responses
;(function(){
  var $$obj = example.responses;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var response = $$obj[$index];

buf.push("<span class=\"tab-button\">" + (jade.escape(null == (jade_interp = response.name) ? "" : jade_interp)) + "</span>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var response = $$obj[$index];

buf.push("<span class=\"tab-button\">" + (jade.escape(null == (jade_interp = response.name) ? "" : jade_interp)) + "</span>");
    }

  }
}).call(this);

buf.push("</div>");
// iterate example.responses
;(function(){
  var $$obj = example.responses;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var response = $$obj[$index];

buf.push("<div class=\"tab\">");
jade_mixins["RequestResponseBody"](response, false, true);
buf.push("</div>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var response = $$obj[$index];

buf.push("<div class=\"tab\">");
jade_mixins["RequestResponseBody"](response, false, true);
buf.push("</div>");
    }

  }
}).call(this);

buf.push("</div>");
    }

  }
}).call(this);

}
buf.push("</div></div>");
}
buf.push("<div class=\"middle\"><a" + (jade.attr("name", action.elementId, true, true)) + " class=\"anchor\"></a><h4 class=\"action-heading-name\">" + (jade.escape(null == (jade_interp = action.name) ? "" : jade_interp)) + "</h4><div" + (jade.cls(['action',action.methodLower], [null,true])) + "><h4 class=\"action-heading\"><div class=\"name\">" + (null == (jade_interp = action.name) ? "" : jade_interp) + "</div><a" + (jade.attr("href", action.elementLink, true, true)) + (jade.cls(['method',action.methodLower], [null,true])) + ">" + (jade.escape(null == (jade_interp = action.method) ? "" : jade_interp)) + "</a><code class=\"uri\">" + (jade.escape(null == (jade_interp = self.urldec(action.uriTemplate)) ? "" : jade_interp)) + "</code></h4>");
if ( action.description)
{
buf.push(null == (jade_interp = self.markdown(action.description)) ? "" : jade_interp);
}
if ( action.parameters.length)
{
jade_mixins["Parameters"](action.parameters);
}
buf.push("");
if ( action.requestAttributes.length)
{
buf.push("<div class=\"parameter\"><div class=\"title\"><strong>Request Attributes</strong></div><div class=\"parameter__content\"><dl class=\"inner\">");
// iterate action.requestAttributes || []
;(function(){
  var $$obj = action.requestAttributes || [];
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var attribute = $$obj[$index];

buf.push("<div class=\"dl-row\"><div class=\"dl-row__content\"><dt><div class=\"parameter-name\">" + (jade.escape(null == (jade_interp = attribute.name) ? "" : jade_interp)) + "</div><div class=\"parameter-meta\">" + (jade.escape(null == (jade_interp = attribute.type) ? "" : jade_interp)) + "</div></dt><dd>");
if ( attribute.description)
{
buf.push("<p>" + (null == (jade_interp = self.markdown(attribute.description)) ? "" : jade_interp) + "</p>");
}
else
{
buf.push("<p></p>");
}
buf.push("</dd></div>");
if ( attribute.properties.length)
{
buf.push("<div class=\"parameter nested\"><div class=\"title\"><div class=\"collapse-button\"><span class=\"close\">Hide child attributes</span><span class=\"open\">Show child attributes</span></div></div><div class=\"collapse-content\"><dl class=\"inner\">");
// iterate attribute.properties || []
;(function(){
  var $$obj = attribute.properties || [];
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var property = $$obj[$index];

buf.push("<div class=\"dl-row\"><div class=\"dl-row__content\"><dt><div class=\"parameter-name\">" + (jade.escape(null == (jade_interp = property.name) ? "" : jade_interp)) + "</div><div class=\"parameter-meta\">" + (jade.escape(null == (jade_interp = property.type) ? "" : jade_interp)) + "</div></dt><dd>");
if ( property.description)
{
buf.push("<p>" + (null == (jade_interp = self.markdown(property.description)) ? "" : jade_interp) + "</p>");
}
else
{
buf.push("<p></p>");
}
buf.push("</dd></div></div>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var property = $$obj[$index];

buf.push("<div class=\"dl-row\"><div class=\"dl-row__content\"><dt><div class=\"parameter-name\">" + (jade.escape(null == (jade_interp = property.name) ? "" : jade_interp)) + "</div><div class=\"parameter-meta\">" + (jade.escape(null == (jade_interp = property.type) ? "" : jade_interp)) + "</div></dt><dd>");
if ( property.description)
{
buf.push("<p>" + (null == (jade_interp = self.markdown(property.description)) ? "" : jade_interp) + "</p>");
}
else
{
buf.push("<p></p>");
}
buf.push("</dd></div></div>");
    }

  }
}).call(this);

buf.push("</dl></div></div>");
}
buf.push("</div>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var attribute = $$obj[$index];

buf.push("<div class=\"dl-row\"><div class=\"dl-row__content\"><dt><div class=\"parameter-name\">" + (jade.escape(null == (jade_interp = attribute.name) ? "" : jade_interp)) + "</div><div class=\"parameter-meta\">" + (jade.escape(null == (jade_interp = attribute.type) ? "" : jade_interp)) + "</div></dt><dd>");
if ( attribute.description)
{
buf.push("<p>" + (null == (jade_interp = self.markdown(attribute.description)) ? "" : jade_interp) + "</p>");
}
else
{
buf.push("<p></p>");
}
buf.push("</dd></div>");
if ( attribute.properties.length)
{
buf.push("<div class=\"parameter nested\"><div class=\"title\"><div class=\"collapse-button\"><span class=\"close\">Hide child attributes</span><span class=\"open\">Show child attributes</span></div></div><div class=\"collapse-content\"><dl class=\"inner\">");
// iterate attribute.properties || []
;(function(){
  var $$obj = attribute.properties || [];
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var property = $$obj[$index];

buf.push("<div class=\"dl-row\"><div class=\"dl-row__content\"><dt><div class=\"parameter-name\">" + (jade.escape(null == (jade_interp = property.name) ? "" : jade_interp)) + "</div><div class=\"parameter-meta\">" + (jade.escape(null == (jade_interp = property.type) ? "" : jade_interp)) + "</div></dt><dd>");
if ( property.description)
{
buf.push("<p>" + (null == (jade_interp = self.markdown(property.description)) ? "" : jade_interp) + "</p>");
}
else
{
buf.push("<p></p>");
}
buf.push("</dd></div></div>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var property = $$obj[$index];

buf.push("<div class=\"dl-row\"><div class=\"dl-row__content\"><dt><div class=\"parameter-name\">" + (jade.escape(null == (jade_interp = property.name) ? "" : jade_interp)) + "</div><div class=\"parameter-meta\">" + (jade.escape(null == (jade_interp = property.type) ? "" : jade_interp)) + "</div></dt><dd>");
if ( property.description)
{
buf.push("<p>" + (null == (jade_interp = self.markdown(property.description)) ? "" : jade_interp) + "</p>");
}
else
{
buf.push("<p></p>");
}
buf.push("</dd></div></div>");
    }

  }
}).call(this);

buf.push("</dl></div></div>");
}
buf.push("</div>");
    }

  }
}).call(this);

buf.push("</dl></div></div>");
}
if ( action.responseAttributes.length)
{
buf.push("<div class=\"parameter\"><div class=\"title\"><strong>Response Attributes</strong></div><div class=\"parameter__content\"><dl class=\"inner\">");
// iterate action.responseAttributes || []
;(function(){
  var $$obj = action.responseAttributes || [];
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var attribute = $$obj[$index];

buf.push("<div class=\"dl-row\"><div class=\"dl-row__content\"><dt><div class=\"parameter-name\">" + (jade.escape(null == (jade_interp = attribute.name) ? "" : jade_interp)) + "</div><div class=\"parameter-meta\">" + (jade.escape(null == (jade_interp = attribute.type) ? "" : jade_interp)) + "</div></dt><dd>");
if ( attribute.description)
{
buf.push("<p>" + (null == (jade_interp = self.markdown(attribute.description)) ? "" : jade_interp) + "</p>");
}
else
{
buf.push("<p></p>");
}
buf.push("</dd></div>");
if ( attribute.properties.length)
{
buf.push("<div class=\"parameter nested\"><div class=\"title\"><div class=\"collapse-button\"><span class=\"close\">Hide child attributes</span><span class=\"open\">Show child attributes</span></div></div><div class=\"collapse-content\"><dl class=\"inner\">");
// iterate attribute.properties || []
;(function(){
  var $$obj = attribute.properties || [];
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var property = $$obj[$index];

buf.push("<div class=\"dl-row\"><div class=\"dl-row__content\"><dt><div class=\"parameter-name\">" + (jade.escape(null == (jade_interp = property.name) ? "" : jade_interp)) + "</div><div class=\"parameter-meta\">" + (jade.escape(null == (jade_interp = property.type) ? "" : jade_interp)) + "</div></dt><dd>");
if ( property.description)
{
buf.push("<p>" + (null == (jade_interp = self.markdown(property.description)) ? "" : jade_interp) + "</p>");
}
else
{
buf.push("<p></p>");
}
buf.push("</dd></div></div>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var property = $$obj[$index];

buf.push("<div class=\"dl-row\"><div class=\"dl-row__content\"><dt><div class=\"parameter-name\">" + (jade.escape(null == (jade_interp = property.name) ? "" : jade_interp)) + "</div><div class=\"parameter-meta\">" + (jade.escape(null == (jade_interp = property.type) ? "" : jade_interp)) + "</div></dt><dd>");
if ( property.description)
{
buf.push("<p>" + (null == (jade_interp = self.markdown(property.description)) ? "" : jade_interp) + "</p>");
}
else
{
buf.push("<p></p>");
}
buf.push("</dd></div></div>");
    }

  }
}).call(this);

buf.push("</dl></div></div>");
}
buf.push("</div>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var attribute = $$obj[$index];

buf.push("<div class=\"dl-row\"><div class=\"dl-row__content\"><dt><div class=\"parameter-name\">" + (jade.escape(null == (jade_interp = attribute.name) ? "" : jade_interp)) + "</div><div class=\"parameter-meta\">" + (jade.escape(null == (jade_interp = attribute.type) ? "" : jade_interp)) + "</div></dt><dd>");
if ( attribute.description)
{
buf.push("<p>" + (null == (jade_interp = self.markdown(attribute.description)) ? "" : jade_interp) + "</p>");
}
else
{
buf.push("<p></p>");
}
buf.push("</dd></div>");
if ( attribute.properties.length)
{
buf.push("<div class=\"parameter nested\"><div class=\"title\"><div class=\"collapse-button\"><span class=\"close\">Hide child attributes</span><span class=\"open\">Show child attributes</span></div></div><div class=\"collapse-content\"><dl class=\"inner\">");
// iterate attribute.properties || []
;(function(){
  var $$obj = attribute.properties || [];
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var property = $$obj[$index];

buf.push("<div class=\"dl-row\"><div class=\"dl-row__content\"><dt><div class=\"parameter-name\">" + (jade.escape(null == (jade_interp = property.name) ? "" : jade_interp)) + "</div><div class=\"parameter-meta\">" + (jade.escape(null == (jade_interp = property.type) ? "" : jade_interp)) + "</div></dt><dd>");
if ( property.description)
{
buf.push("<p>" + (null == (jade_interp = self.markdown(property.description)) ? "" : jade_interp) + "</p>");
}
else
{
buf.push("<p></p>");
}
buf.push("</dd></div></div>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var property = $$obj[$index];

buf.push("<div class=\"dl-row\"><div class=\"dl-row__content\"><dt><div class=\"parameter-name\">" + (jade.escape(null == (jade_interp = property.name) ? "" : jade_interp)) + "</div><div class=\"parameter-meta\">" + (jade.escape(null == (jade_interp = property.type) ? "" : jade_interp)) + "</div></dt><dd>");
if ( property.description)
{
buf.push("<p>" + (null == (jade_interp = self.markdown(property.description)) ? "" : jade_interp) + "</p>");
}
else
{
buf.push("<p></p>");
}
buf.push("</dd></div></div>");
    }

  }
}).call(this);

buf.push("</dl></div></div>");
}
buf.push("</div>");
    }

  }
}).call(this);

buf.push("</dl></div></div>");
}
buf.push("</div></div></div>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var action = $$obj[$index];

buf.push("<div class=\"action-wrap\">");
if ( action.examples)
{
buf.push("<div class=\"right\"><div class=\"definition\"><span" + (jade.cls(['method',action.methodLower], [null,true])) + ">" + (jade.escape(null == (jade_interp = action.method) ? "" : jade_interp)) + "</span>&nbsp;<span class=\"uri\"><span class=\"hostname\">" + (jade.escape(null == (jade_interp = self.api.host) ? "" : jade_interp)) + "</span>" + (null == (jade_interp = action.colorizedUriTemplate) ? "" : jade_interp) + "</span></div><div class=\"tabs\">");
if ( action.hasRequest)
{
buf.push("<div class=\"example-names\"><span>Request</span></div>");
// iterate action.examples
;(function(){
  var $$obj = action.examples;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var example = $$obj[$index];

// iterate example.requests
;(function(){
  var $$obj = example.requests;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var request = $$obj[$index];

buf.push("<div class=\"tab\">");
jade_mixins["RequestResponseBody"](request, false, true);
buf.push("<div class=\"tabs\"><div class=\"example-names\"><span>Response</span>");
// iterate example.responses
;(function(){
  var $$obj = example.responses;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var response = $$obj[$index];

buf.push("<span class=\"tab-button\">" + (jade.escape(null == (jade_interp = response.name) ? "" : jade_interp)) + "</span>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var response = $$obj[$index];

buf.push("<span class=\"tab-button\">" + (jade.escape(null == (jade_interp = response.name) ? "" : jade_interp)) + "</span>");
    }

  }
}).call(this);

buf.push("</div>");
// iterate example.responses
;(function(){
  var $$obj = example.responses;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var response = $$obj[$index];

buf.push("<div class=\"tab\">");
jade_mixins["RequestResponseBody"](response, false, true);
buf.push("</div>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var response = $$obj[$index];

buf.push("<div class=\"tab\">");
jade_mixins["RequestResponseBody"](response, false, true);
buf.push("</div>");
    }

  }
}).call(this);

buf.push("</div></div>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var request = $$obj[$index];

buf.push("<div class=\"tab\">");
jade_mixins["RequestResponseBody"](request, false, true);
buf.push("<div class=\"tabs\"><div class=\"example-names\"><span>Response</span>");
// iterate example.responses
;(function(){
  var $$obj = example.responses;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var response = $$obj[$index];

buf.push("<span class=\"tab-button\">" + (jade.escape(null == (jade_interp = response.name) ? "" : jade_interp)) + "</span>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var response = $$obj[$index];

buf.push("<span class=\"tab-button\">" + (jade.escape(null == (jade_interp = response.name) ? "" : jade_interp)) + "</span>");
    }

  }
}).call(this);

buf.push("</div>");
// iterate example.responses
;(function(){
  var $$obj = example.responses;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var response = $$obj[$index];

buf.push("<div class=\"tab\">");
jade_mixins["RequestResponseBody"](response, false, true);
buf.push("</div>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var response = $$obj[$index];

buf.push("<div class=\"tab\">");
jade_mixins["RequestResponseBody"](response, false, true);
buf.push("</div>");
    }

  }
}).call(this);

buf.push("</div></div>");
    }

  }
}).call(this);

    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var example = $$obj[$index];

// iterate example.requests
;(function(){
  var $$obj = example.requests;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var request = $$obj[$index];

buf.push("<div class=\"tab\">");
jade_mixins["RequestResponseBody"](request, false, true);
buf.push("<div class=\"tabs\"><div class=\"example-names\"><span>Response</span>");
// iterate example.responses
;(function(){
  var $$obj = example.responses;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var response = $$obj[$index];

buf.push("<span class=\"tab-button\">" + (jade.escape(null == (jade_interp = response.name) ? "" : jade_interp)) + "</span>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var response = $$obj[$index];

buf.push("<span class=\"tab-button\">" + (jade.escape(null == (jade_interp = response.name) ? "" : jade_interp)) + "</span>");
    }

  }
}).call(this);

buf.push("</div>");
// iterate example.responses
;(function(){
  var $$obj = example.responses;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var response = $$obj[$index];

buf.push("<div class=\"tab\">");
jade_mixins["RequestResponseBody"](response, false, true);
buf.push("</div>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var response = $$obj[$index];

buf.push("<div class=\"tab\">");
jade_mixins["RequestResponseBody"](response, false, true);
buf.push("</div>");
    }

  }
}).call(this);

buf.push("</div></div>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var request = $$obj[$index];

buf.push("<div class=\"tab\">");
jade_mixins["RequestResponseBody"](request, false, true);
buf.push("<div class=\"tabs\"><div class=\"example-names\"><span>Response</span>");
// iterate example.responses
;(function(){
  var $$obj = example.responses;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var response = $$obj[$index];

buf.push("<span class=\"tab-button\">" + (jade.escape(null == (jade_interp = response.name) ? "" : jade_interp)) + "</span>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var response = $$obj[$index];

buf.push("<span class=\"tab-button\">" + (jade.escape(null == (jade_interp = response.name) ? "" : jade_interp)) + "</span>");
    }

  }
}).call(this);

buf.push("</div>");
// iterate example.responses
;(function(){
  var $$obj = example.responses;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var response = $$obj[$index];

buf.push("<div class=\"tab\">");
jade_mixins["RequestResponseBody"](response, false, true);
buf.push("</div>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var response = $$obj[$index];

buf.push("<div class=\"tab\">");
jade_mixins["RequestResponseBody"](response, false, true);
buf.push("</div>");
    }

  }
}).call(this);

buf.push("</div></div>");
    }

  }
}).call(this);

    }

  }
}).call(this);

}
else
{
// iterate action.examples
;(function(){
  var $$obj = action.examples;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var example = $$obj[$index];

buf.push("<div class=\"tabs\"><div class=\"example-names\"><span>Response</span>");
// iterate example.responses
;(function(){
  var $$obj = example.responses;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var response = $$obj[$index];

buf.push("<span class=\"tab-button\">" + (jade.escape(null == (jade_interp = response.name) ? "" : jade_interp)) + "</span>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var response = $$obj[$index];

buf.push("<span class=\"tab-button\">" + (jade.escape(null == (jade_interp = response.name) ? "" : jade_interp)) + "</span>");
    }

  }
}).call(this);

buf.push("</div>");
// iterate example.responses
;(function(){
  var $$obj = example.responses;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var response = $$obj[$index];

buf.push("<div class=\"tab\">");
jade_mixins["RequestResponseBody"](response, false, true);
buf.push("</div>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var response = $$obj[$index];

buf.push("<div class=\"tab\">");
jade_mixins["RequestResponseBody"](response, false, true);
buf.push("</div>");
    }

  }
}).call(this);

buf.push("</div>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var example = $$obj[$index];

buf.push("<div class=\"tabs\"><div class=\"example-names\"><span>Response</span>");
// iterate example.responses
;(function(){
  var $$obj = example.responses;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var response = $$obj[$index];

buf.push("<span class=\"tab-button\">" + (jade.escape(null == (jade_interp = response.name) ? "" : jade_interp)) + "</span>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var response = $$obj[$index];

buf.push("<span class=\"tab-button\">" + (jade.escape(null == (jade_interp = response.name) ? "" : jade_interp)) + "</span>");
    }

  }
}).call(this);

buf.push("</div>");
// iterate example.responses
;(function(){
  var $$obj = example.responses;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var response = $$obj[$index];

buf.push("<div class=\"tab\">");
jade_mixins["RequestResponseBody"](response, false, true);
buf.push("</div>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var response = $$obj[$index];

buf.push("<div class=\"tab\">");
jade_mixins["RequestResponseBody"](response, false, true);
buf.push("</div>");
    }

  }
}).call(this);

buf.push("</div>");
    }

  }
}).call(this);

}
buf.push("</div></div>");
}
buf.push("<div class=\"middle\"><a" + (jade.attr("name", action.elementId, true, true)) + " class=\"anchor\"></a><h4 class=\"action-heading-name\">" + (jade.escape(null == (jade_interp = action.name) ? "" : jade_interp)) + "</h4><div" + (jade.cls(['action',action.methodLower], [null,true])) + "><h4 class=\"action-heading\"><div class=\"name\">" + (null == (jade_interp = action.name) ? "" : jade_interp) + "</div><a" + (jade.attr("href", action.elementLink, true, true)) + (jade.cls(['method',action.methodLower], [null,true])) + ">" + (jade.escape(null == (jade_interp = action.method) ? "" : jade_interp)) + "</a><code class=\"uri\">" + (jade.escape(null == (jade_interp = self.urldec(action.uriTemplate)) ? "" : jade_interp)) + "</code></h4>");
if ( action.description)
{
buf.push(null == (jade_interp = self.markdown(action.description)) ? "" : jade_interp);
}
if ( action.parameters.length)
{
jade_mixins["Parameters"](action.parameters);
}
buf.push("");
if ( action.requestAttributes.length)
{
buf.push("<div class=\"parameter\"><div class=\"title\"><strong>Request Attributes</strong></div><div class=\"parameter__content\"><dl class=\"inner\">");
// iterate action.requestAttributes || []
;(function(){
  var $$obj = action.requestAttributes || [];
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var attribute = $$obj[$index];

buf.push("<div class=\"dl-row\"><div class=\"dl-row__content\"><dt><div class=\"parameter-name\">" + (jade.escape(null == (jade_interp = attribute.name) ? "" : jade_interp)) + "</div><div class=\"parameter-meta\">" + (jade.escape(null == (jade_interp = attribute.type) ? "" : jade_interp)) + "</div></dt><dd>");
if ( attribute.description)
{
buf.push("<p>" + (null == (jade_interp = self.markdown(attribute.description)) ? "" : jade_interp) + "</p>");
}
else
{
buf.push("<p></p>");
}
buf.push("</dd></div>");
if ( attribute.properties.length)
{
buf.push("<div class=\"parameter nested\"><div class=\"title\"><div class=\"collapse-button\"><span class=\"close\">Hide child attributes</span><span class=\"open\">Show child attributes</span></div></div><div class=\"collapse-content\"><dl class=\"inner\">");
// iterate attribute.properties || []
;(function(){
  var $$obj = attribute.properties || [];
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var property = $$obj[$index];

buf.push("<div class=\"dl-row\"><div class=\"dl-row__content\"><dt><div class=\"parameter-name\">" + (jade.escape(null == (jade_interp = property.name) ? "" : jade_interp)) + "</div><div class=\"parameter-meta\">" + (jade.escape(null == (jade_interp = property.type) ? "" : jade_interp)) + "</div></dt><dd>");
if ( property.description)
{
buf.push("<p>" + (null == (jade_interp = self.markdown(property.description)) ? "" : jade_interp) + "</p>");
}
else
{
buf.push("<p></p>");
}
buf.push("</dd></div></div>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var property = $$obj[$index];

buf.push("<div class=\"dl-row\"><div class=\"dl-row__content\"><dt><div class=\"parameter-name\">" + (jade.escape(null == (jade_interp = property.name) ? "" : jade_interp)) + "</div><div class=\"parameter-meta\">" + (jade.escape(null == (jade_interp = property.type) ? "" : jade_interp)) + "</div></dt><dd>");
if ( property.description)
{
buf.push("<p>" + (null == (jade_interp = self.markdown(property.description)) ? "" : jade_interp) + "</p>");
}
else
{
buf.push("<p></p>");
}
buf.push("</dd></div></div>");
    }

  }
}).call(this);

buf.push("</dl></div></div>");
}
buf.push("</div>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var attribute = $$obj[$index];

buf.push("<div class=\"dl-row\"><div class=\"dl-row__content\"><dt><div class=\"parameter-name\">" + (jade.escape(null == (jade_interp = attribute.name) ? "" : jade_interp)) + "</div><div class=\"parameter-meta\">" + (jade.escape(null == (jade_interp = attribute.type) ? "" : jade_interp)) + "</div></dt><dd>");
if ( attribute.description)
{
buf.push("<p>" + (null == (jade_interp = self.markdown(attribute.description)) ? "" : jade_interp) + "</p>");
}
else
{
buf.push("<p></p>");
}
buf.push("</dd></div>");
if ( attribute.properties.length)
{
buf.push("<div class=\"parameter nested\"><div class=\"title\"><div class=\"collapse-button\"><span class=\"close\">Hide child attributes</span><span class=\"open\">Show child attributes</span></div></div><div class=\"collapse-content\"><dl class=\"inner\">");
// iterate attribute.properties || []
;(function(){
  var $$obj = attribute.properties || [];
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var property = $$obj[$index];

buf.push("<div class=\"dl-row\"><div class=\"dl-row__content\"><dt><div class=\"parameter-name\">" + (jade.escape(null == (jade_interp = property.name) ? "" : jade_interp)) + "</div><div class=\"parameter-meta\">" + (jade.escape(null == (jade_interp = property.type) ? "" : jade_interp)) + "</div></dt><dd>");
if ( property.description)
{
buf.push("<p>" + (null == (jade_interp = self.markdown(property.description)) ? "" : jade_interp) + "</p>");
}
else
{
buf.push("<p></p>");
}
buf.push("</dd></div></div>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var property = $$obj[$index];

buf.push("<div class=\"dl-row\"><div class=\"dl-row__content\"><dt><div class=\"parameter-name\">" + (jade.escape(null == (jade_interp = property.name) ? "" : jade_interp)) + "</div><div class=\"parameter-meta\">" + (jade.escape(null == (jade_interp = property.type) ? "" : jade_interp)) + "</div></dt><dd>");
if ( property.description)
{
buf.push("<p>" + (null == (jade_interp = self.markdown(property.description)) ? "" : jade_interp) + "</p>");
}
else
{
buf.push("<p></p>");
}
buf.push("</dd></div></div>");
    }

  }
}).call(this);

buf.push("</dl></div></div>");
}
buf.push("</div>");
    }

  }
}).call(this);

buf.push("</dl></div></div>");
}
if ( action.responseAttributes.length)
{
buf.push("<div class=\"parameter\"><div class=\"title\"><strong>Response Attributes</strong></div><div class=\"parameter__content\"><dl class=\"inner\">");
// iterate action.responseAttributes || []
;(function(){
  var $$obj = action.responseAttributes || [];
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var attribute = $$obj[$index];

buf.push("<div class=\"dl-row\"><div class=\"dl-row__content\"><dt><div class=\"parameter-name\">" + (jade.escape(null == (jade_interp = attribute.name) ? "" : jade_interp)) + "</div><div class=\"parameter-meta\">" + (jade.escape(null == (jade_interp = attribute.type) ? "" : jade_interp)) + "</div></dt><dd>");
if ( attribute.description)
{
buf.push("<p>" + (null == (jade_interp = self.markdown(attribute.description)) ? "" : jade_interp) + "</p>");
}
else
{
buf.push("<p></p>");
}
buf.push("</dd></div>");
if ( attribute.properties.length)
{
buf.push("<div class=\"parameter nested\"><div class=\"title\"><div class=\"collapse-button\"><span class=\"close\">Hide child attributes</span><span class=\"open\">Show child attributes</span></div></div><div class=\"collapse-content\"><dl class=\"inner\">");
// iterate attribute.properties || []
;(function(){
  var $$obj = attribute.properties || [];
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var property = $$obj[$index];

buf.push("<div class=\"dl-row\"><div class=\"dl-row__content\"><dt><div class=\"parameter-name\">" + (jade.escape(null == (jade_interp = property.name) ? "" : jade_interp)) + "</div><div class=\"parameter-meta\">" + (jade.escape(null == (jade_interp = property.type) ? "" : jade_interp)) + "</div></dt><dd>");
if ( property.description)
{
buf.push("<p>" + (null == (jade_interp = self.markdown(property.description)) ? "" : jade_interp) + "</p>");
}
else
{
buf.push("<p></p>");
}
buf.push("</dd></div></div>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var property = $$obj[$index];

buf.push("<div class=\"dl-row\"><div class=\"dl-row__content\"><dt><div class=\"parameter-name\">" + (jade.escape(null == (jade_interp = property.name) ? "" : jade_interp)) + "</div><div class=\"parameter-meta\">" + (jade.escape(null == (jade_interp = property.type) ? "" : jade_interp)) + "</div></dt><dd>");
if ( property.description)
{
buf.push("<p>" + (null == (jade_interp = self.markdown(property.description)) ? "" : jade_interp) + "</p>");
}
else
{
buf.push("<p></p>");
}
buf.push("</dd></div></div>");
    }

  }
}).call(this);

buf.push("</dl></div></div>");
}
buf.push("</div>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var attribute = $$obj[$index];

buf.push("<div class=\"dl-row\"><div class=\"dl-row__content\"><dt><div class=\"parameter-name\">" + (jade.escape(null == (jade_interp = attribute.name) ? "" : jade_interp)) + "</div><div class=\"parameter-meta\">" + (jade.escape(null == (jade_interp = attribute.type) ? "" : jade_interp)) + "</div></dt><dd>");
if ( attribute.description)
{
buf.push("<p>" + (null == (jade_interp = self.markdown(attribute.description)) ? "" : jade_interp) + "</p>");
}
else
{
buf.push("<p></p>");
}
buf.push("</dd></div>");
if ( attribute.properties.length)
{
buf.push("<div class=\"parameter nested\"><div class=\"title\"><div class=\"collapse-button\"><span class=\"close\">Hide child attributes</span><span class=\"open\">Show child attributes</span></div></div><div class=\"collapse-content\"><dl class=\"inner\">");
// iterate attribute.properties || []
;(function(){
  var $$obj = attribute.properties || [];
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var property = $$obj[$index];

buf.push("<div class=\"dl-row\"><div class=\"dl-row__content\"><dt><div class=\"parameter-name\">" + (jade.escape(null == (jade_interp = property.name) ? "" : jade_interp)) + "</div><div class=\"parameter-meta\">" + (jade.escape(null == (jade_interp = property.type) ? "" : jade_interp)) + "</div></dt><dd>");
if ( property.description)
{
buf.push("<p>" + (null == (jade_interp = self.markdown(property.description)) ? "" : jade_interp) + "</p>");
}
else
{
buf.push("<p></p>");
}
buf.push("</dd></div></div>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var property = $$obj[$index];

buf.push("<div class=\"dl-row\"><div class=\"dl-row__content\"><dt><div class=\"parameter-name\">" + (jade.escape(null == (jade_interp = property.name) ? "" : jade_interp)) + "</div><div class=\"parameter-meta\">" + (jade.escape(null == (jade_interp = property.type) ? "" : jade_interp)) + "</div></dt><dd>");
if ( property.description)
{
buf.push("<p>" + (null == (jade_interp = self.markdown(property.description)) ? "" : jade_interp) + "</p>");
}
else
{
buf.push("<p></p>");
}
buf.push("</dd></div></div>");
    }

  }
}).call(this);

buf.push("</dl></div></div>");
}
buf.push("</div>");
    }

  }
}).call(this);

buf.push("</dl></div></div>");
}
buf.push("</div></div></div>");
    }

  }
}).call(this);

    }

  }
}).call(this);

    }

  }
}).call(this);

};
buf.push("<html><head><meta charset=\"utf-8\"><title>" + (jade.escape(null == (jade_interp = self.api.name || 'API Documentation') ? "" : jade_interp)) + "</title><link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css\"><link rel=\"stylesheet\" href=\"https://cloud.typography.com/7769332/6090952/css/fonts.css\"><style>" + (null == (jade_interp = self.css) ? "" : jade_interp) + "</style></head><body class=\"preload\"><div class=\"top-bar\"><img src=\"http://maplet.com/img/maplet-horiz-logo.png\" class=\"logo\"><div class=\"goto\"><span>Go to: &nbsp;</span><a href=\"https://my.maplet.com\" target=\"_blank\">Login screen</a><span>&nbsp;&nbsp;|&nbsp;&nbsp;</span><a href=\"http://maplet.com\" target=\"_blank\">Maplet.com</a></div></div><div id=\"nav-background\"></div><div class=\"container-fluid triple\"><div class=\"row\">");
jade_mixins["Nav"]();
buf.push("<div class=\"content\"><div id=\"right-panel-background\"></div>");
jade_mixins["ContentTriple"]();
buf.push("</div></div></div><script>/* eslint-env browser */\n/* eslint quotes: [2, \"single\"] */\n'use strict';\n\n/*\n  Determine if a string ends with another string.\n*/\nfunction endsWith(str, suffix) {\n    return str.indexOf(suffix, str.length - suffix.length) !== -1;\n}\n\n/*\n  Get a list of direct child elements by class name.\n*/\nfunction childrenByClass(element, name) {\n  var filtered = [];\n\n  for (var i = 0; i < element.children.length; i++) {\n    var child = element.children[i];\n    var classNames = child.className.split(' ');\n    if (classNames.indexOf(name) !== -1) {\n      filtered.push(child);\n    }\n  }\n\n  return filtered;\n}\n\n/*\n  Get an array [width, height] of the window.\n*/\nfunction getWindowDimensions() {\n  var w = window,\n      d = document,\n      e = d.documentElement,\n      g = d.body,\n      x = w.innerWidth || e.clientWidth || g.clientWidth,\n      y = w.innerHeight || e.clientHeight || g.clientHeight;\n\n  return [x, y];\n}\n\n/*\n  Collapse or show a request/response example.\n*/\nfunction toggleCollapseButton(event) {\n    var button = event.target.parentNode;\n    var content = button.parentNode.nextSibling;\n    var inner = content.children[0];\n\n    if (button.className.indexOf('collapse-button') === -1) {\n      // Clicked without hitting the right element?\n      return;\n    }\n\n    if (content.style.maxHeight && content.style.maxHeight !== '0px') {\n        // Currently showing, so let's hide it\n        button.className = 'collapse-button';\n        content.style.maxHeight = '0px';\n    } else {\n        // Currently hidden, so let's show it\n        button.className = 'collapse-button show';\n        content.style.maxHeight = inner.offsetHeight + 12 + 'px';\n    }\n}\n\nfunction toggleTabButton(event) {\n    var i, index;\n    var button = event.target;\n\n    // Get index of the current button.\n    var buttons = childrenByClass(button.parentNode, 'tab-button');\n    for (i = 0; i < buttons.length; i++) {\n        if (buttons[i] === button) {\n            index = i;\n            button.className = 'tab-button active';\n        } else {\n            buttons[i].className = 'tab-button';\n        }\n    }\n\n    // Hide other tabs and show this one.\n    var tabs = childrenByClass(button.parentNode.parentNode, 'tab');\n    for (i = 0; i < tabs.length; i++) {\n        if (i === index) {\n            tabs[i].style.display = 'block';\n        } else {\n            tabs[i].style.display = 'none';\n        }\n    }\n}\n\n/*\n  Collapse or show a navigation menu. It will not be hidden unless it\n  is currently selected or `force` has been passed.\n*/\nfunction toggleCollapseNav(event, force) {\n    var heading = event.target.parentNode;\n    var content = heading.nextSibling;\n    var inner = content.children[0];\n\n    if (heading.className.indexOf('heading') === -1) {\n      // Clicked without hitting the right element?\n      return;\n    }\n\n    if (content.style.maxHeight && content.style.maxHeight !== '0px') {\n      // Currently showing, so let's hide it, but only if this nav item\n      // is already selected. This prevents newly selected items from\n      // collapsing in an annoying fashion.\n      if (force || window.location.hash && endsWith(event.target.href, window.location.hash)) {\n        content.style.maxHeight = '0px';\n      }\n    } else {\n      // Currently hidden, so let's show it\n      content.style.maxHeight = inner.offsetHeight + 12 + 'px';\n    }\n}\n\n/*\n  Refresh the page after a live update from the server. This only\n  works in live preview mode (using the `--server` parameter).\n*/\nfunction refresh(body) {\n    document.querySelector('body').className = 'preload';\n    document.body.innerHTML = body;\n\n    // Re-initialize the page\n    init();\n    autoCollapse();\n\n    document.querySelector('body').className = '';\n}\n\n/*\n  Determine which navigation items should be auto-collapsed to show as many\n  as possible on the screen, based on the current window height. This also\n  collapses them.\n*/\nfunction autoCollapse() {\n  var windowHeight = getWindowDimensions()[1];\n  var itemsHeight = 64; /* Account for some padding */\n  var itemsArray = Array.prototype.slice.call(\n    document.querySelectorAll('nav .resource-group .heading'));\n\n  // Get the total height of the navigation items\n  itemsArray.forEach(function (item) {\n    itemsHeight += item.parentNode.offsetHeight;\n  });\n\n  // Should we auto-collapse any nav items? Try to find the smallest item\n  // that can be collapsed to show all items on the screen. If not possible,\n  // then collapse the largest item and do it again. First, sort the items\n  // by height from smallest to largest.\n  var sortedItems = itemsArray.sort(function (a, b) {\n    return a.parentNode.offsetHeight - b.parentNode.offsetHeight;\n  });\n\n  while (sortedItems.length && itemsHeight > windowHeight) {\n    for (var i = 0; i < sortedItems.length; i++) {\n      // Will collapsing this item help?\n      var itemHeight = sortedItems[i].nextSibling.offsetHeight;\n      if ((itemsHeight - itemHeight <= windowHeight) || i === sortedItems.length - 1) {\n        // It will, so let's collapse it, remove its content height from\n        // our total and then remove it from our list of candidates\n        // that can be collapsed.\n        itemsHeight -= itemHeight;\n        toggleCollapseNav({target: sortedItems[i].children[0]}, true);\n        sortedItems.splice(i, 1);\n        break;\n      }\n    }\n  }\n}\n\n/*\n  Initialize the interactive functionality of the page.\n*/\nfunction init() {\n    var i, j;\n\n    // Make collapse buttons clickable\n    var buttons = document.querySelectorAll('.collapse-button');\n    for (i = 0; i < buttons.length; i++) {\n        buttons[i].onclick = toggleCollapseButton;\n\n        // Show by default? Then toggle now.\n        if (buttons[i].className.indexOf('show') !== -1) {\n            toggleCollapseButton({target: buttons[i].children[0]});\n        }\n    }\n\n    var responseCodes = document.querySelectorAll('.example-names');\n    for (i = 0; i < responseCodes.length; i++) {\n        var tabButtons = childrenByClass(responseCodes[i], 'tab-button');\n        for (j = 0; j < tabButtons.length; j++) {\n            tabButtons[j].onclick = toggleTabButton;\n\n            // Show by default?\n            if (j === 0) {\n                toggleTabButton({target: tabButtons[j]});\n            }\n        }\n    }\n\n    // Make nav items clickable to collapse/expand their content.\n    var navItems = document.querySelectorAll('nav .resource-group .heading');\n    for (i = 0; i < navItems.length; i++) {\n        navItems[i].onclick = toggleCollapseNav;\n\n        // Show all by default\n        toggleCollapseNav({target: navItems[i].children[0]});\n    }\n}\n\n// Initial call to set up buttons\ninit();\n\nwindow.onload = function () {\n    autoCollapse();\n    // Remove the `preload` class to enable animations\n    document.querySelector('body').className = '';\n};\n</script>");
if ( self.livePreview)
{
buf.push("<script src=\"/socket.io/socket.io.js\"></script><script>var socket = io();\nsocket.on('refresh', refresh);\nsocket.on('reconnect', function () {\n    socket.emit('request-refresh');\n});</script>");
}
buf.push("</body></html>");;return buf.join("");
}
module.exports = compiledFunc;