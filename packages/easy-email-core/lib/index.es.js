var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import React, { useContext, useMemo } from "react";
import { unescape as unescape$1, omit, merge, isObject as isObject$1, isString as isString$1, mergeWith, isArray as isArray$1, set, get, pickBy, identity, isNumber as isNumber$1 } from "lodash";
import { renderToStaticMarkup } from "react-dom/server";
import mjml from "mjml-browser";
var BasicType;
(function(BasicType2) {
  BasicType2["PAGE"] = "page";
  BasicType2["SECTION"] = "section";
  BasicType2["COLUMN"] = "column";
  BasicType2["GROUP"] = "group";
  BasicType2["TEXT"] = "text";
  BasicType2["IMAGE"] = "image";
  BasicType2["DIVIDER"] = "divider";
  BasicType2["SPACER"] = "spacer";
  BasicType2["BUTTON"] = "button";
  BasicType2["WRAPPER"] = "wrapper";
  BasicType2["RAW"] = "raw";
  BasicType2["ACCORDION"] = "accordion";
  BasicType2["ACCORDION_ELEMENT"] = "accordion-element";
  BasicType2["ACCORDION_TITLE"] = "accordion-title";
  BasicType2["ACCORDION_TEXT"] = "accordion-text";
  BasicType2["HERO"] = "hero";
  BasicType2["CAROUSEL"] = "carousel";
  BasicType2["NAVBAR"] = "navbar";
  BasicType2["SOCIAL"] = "social";
  BasicType2["TABLE"] = "table";
  BasicType2["TEMPLATE"] = "template";
  BasicType2["CUSTOM_TEXT"] = "custom-text";
  BasicType2["EMPTY_PAGE"] = "empty-page";
  BasicType2["POD_CUSTOM_PAGE"] = "pod-custom-page";
  BasicType2["NEWS"] = "news";
  BasicType2["HEADING"] = "heading";
  BasicType2["ROUNDED_BUTTON"] = "rounded-button";
  BasicType2["POST_CARD"] = "post-card";
  BasicType2["THANKYOU_CARD"] = "thankyou-card";
  BasicType2["QUOTE_CARD"] = "quote";
})(BasicType || (BasicType = {}));
var AdvancedType;
(function(AdvancedType2) {
  AdvancedType2["TEXT"] = "advanced_text";
  AdvancedType2["IMAGE"] = "advanced_image";
  AdvancedType2["DIVIDER"] = "advanced_divider";
  AdvancedType2["SPACER"] = "advanced_spacer";
  AdvancedType2["BUTTON"] = "advanced_button";
  AdvancedType2["NAVBAR"] = "advanced_navbar";
  AdvancedType2["SOCIAL"] = "advanced_social";
  AdvancedType2["ACCORDION"] = "advanced_accordion";
  AdvancedType2["CAROUSEL"] = "advanced_carousel";
  AdvancedType2["WRAPPER"] = "advanced_wrapper";
  AdvancedType2["SECTION"] = "advanced_section";
  AdvancedType2["COLUMN"] = "advanced_column";
  AdvancedType2["GROUP"] = "advanced_group";
  AdvancedType2["HERO"] = "advanced_hero";
})(AdvancedType || (AdvancedType = {}));
const MERGE_TAG_CLASS_NAME = "easy-email-merge-tag-container";
const EMAIL_BLOCK_CLASS_NAME = "email-block";
function createBlock(block2) {
  return __spreadValues({}, block2);
}
class ImageManager {
  static add(imgMap) {
    Object.keys(imgMap).forEach((name) => {
      if (this.map[name]) {
        this.overrideMap[name] = true;
      }
      this.map[name] = imgMap[name];
    });
  }
  static get(name) {
    return this.map[name];
  }
  static getOverrideMap() {
    return this.overrideMap;
  }
}
__publicField(ImageManager, "map", {});
__publicField(ImageManager, "overrideMap", {});
const defaultImagesMap = {
  IMAGE_01: "https://easy-email-m-ryan.vercel.app/images/ffddc3db-3aae-4d73-ac9c-e1263641f7b4-03c89c34-49a4-4d45-b289-4d2261158cbe.png",
  IMAGE_02: "https://easy-email-m-ryan.vercel.app/images/acbae5eb-efa4-4eb6-866c-f421e740b713-ad3c92b1-9cdb-4a7b-aad3-75ad809db8a3.png",
  IMAGE_03: "https://easy-email-m-ryan.vercel.app/images/98520d6c-5cef-449e-bcbf-6316ccec2088-e8780361-0deb-4896-895e-e690c886cdf0.png",
  IMAGE_04: "https://easy-email-m-ryan.vercel.app/images/b064f705-34ba-4400-975e-9dd0cec21c30-cc9aa158-56bd-4bf1-b532-72390d25c864.png",
  IMAGE_59: "https://easy-email-m-ryan.vercel.app/images/8e0e07e2-3f84-4426-84c1-2add355c558b-image.png",
  IMAGE_09: "https://easy-email-m-ryan.vercel.app/images/be34fb18-32ad-441c-84d8-3c0e9ba9f742-ad2ea5ff-5d0b-446b-bd7d-8e2ab5afdd16.png",
  IMAGE_10: "https://easy-email-m-ryan.vercel.app/images/6a1e6292-469e-452a-bbae-44e4b5ff7463-05e543b6-c951-44ce-ae27-ca1282c77f52.png",
  IMAGE_15: "https://easy-email-m-ryan.vercel.app/images/f69f48af-5b15-40aa-91c4-81d601d1357b-083dc99d-02a6-40d9-ae28-0662bd078b5d.png",
  IMAGE_16: "https://easy-email-m-ryan.vercel.app/images/9cce6b16-5a98-4ddb-b1a1-6cec2cf56891-c3acb856-8ab8-4cfb-93f9-2a0747678b8b.png",
  IMAGE_17: "https://easy-email-m-ryan.vercel.app/images/d9795c1d-fa32-4adb-ab25-30b7cfe87936-df21314f-6f05-4550-80b3-9ab1107e8fbe.png",
  IMAGE_31: "https://easy-email-m-ryan.vercel.app/images/dd1584fb-cb60-42c9-80c7-5545e16130ca-226ba72b-ce9e-4948-ad0d-347381fb96c5.png"
};
ImageManager.add(defaultImagesMap);
function getImg(name) {
  return ImageManager.get(name);
}
function getPlaceholder(params) {
  const { data: { type }, mode } = params;
  if (mode === "production")
    return null;
  let text = null;
  if (type === BasicType.PAGE || type === BasicType.POD_CUSTOM_PAGE) {
    text = "Drop a Wrapper block here";
  } else if (type === BasicType.WRAPPER || type === AdvancedType.WRAPPER) {
    text = "Drop a Section block here";
  } else if (type === BasicType.SECTION || type === BasicType.GROUP || type === AdvancedType.SECTION || type === AdvancedType.GROUP) {
    text = "Drop a Column block here";
  } else if (type === BasicType.COLUMN || type === AdvancedType.COLUMN) {
    text = "Drop a content block here";
  }
  if (!text)
    return null;
  return `
   <mj-text color="#666">
    <div style="text-align: center">
      <div>
        <svg width="300" fill="currentColor" style="max-width: 100%;" viewBox="-20 -5 80 60">
          <g>
            <path d="M23.713 23.475h5.907c.21 0 .38.17.38.38v.073c0 .21-.17.38-.38.38h-5.907a.38.38 0 0 1-.38-.38v-.073c0-.21.17-.38.38-.38zm.037-2.917h9.167a.417.417 0 0 1 0 .834H23.75a.417.417 0 0 1 0-.834zm0-2.5h9.167a.417.417 0 0 1 0 .834H23.75a.417.417 0 0 1 0-.834zm-.037-3.333h5.907c.21 0 .38.17.38.38v.073c0 .21-.17.38-.38.38h-5.907a.38.38 0 0 1-.38-.38v-.073c0-.21.17-.38.38-.38zm.037-2.917h9.167a.417.417 0 0 1 0 .834H23.75a.417.417 0 0 1 0-.834zm0-2.916h9.167a.417.417 0 0 1 0 .833H23.75a.417.417 0 0 1 0-.833zm-3.592 8.75a.675.675 0 0 1 .675.691v6.142c0 .374-.3.679-.675.683h-6.15a.683.683 0 0 1-.675-.683v-6.142a.675.675 0 0 1 .675-.691h6.15zM20 24.308v-5.833h-5.833v5.833H20zm.158-15.833a.675.675 0 0 1 .675.692v6.141c0 .374-.3.68-.675.684h-6.15a.683.683 0 0 1-.675-.684V9.167a.675.675 0 0 1 .675-.692h6.15zM20 15.142V9.308h-5.833v5.834H20zM37.167 0A2.809 2.809 0 0 1 40 2.833V30.5a2.809 2.809 0 0 1-2.833 2.833h-3.834v3H32.5v-3h-23A2.808 2.808 0 0 1 6.667 30.5v-23H3.583v-.833h3.084V2.833A2.808 2.808 0 0 1 9.5 0h27.667zm2 30.5V2.833a2.025 2.025 0 0 0-2-2H9.5a2.025 2.025 0 0 0-2 2V30.5a2.025 2.025 0 0 0 2 2h27.667a2.025 2.025 0 0 0 2-2zM0 27.75h.833V31H0v-3.25zm0-13h.833V18H0v-3.25zm0 22.833V34.25h.833v3.25L0 37.583zM0 21.25h.833v3.25H0v-3.25zM2.583 40l.084-.833h3.166V40h-3.25zm27.917-.833c.376.006.748-.08 1.083-.25l.417.666a2.875 2.875 0 0 1-1.5.417h-1.833v-.833H30.5zm-8.333 0h3.25V40h-3.25v-.833zm-6.584 0h3.25V40h-3.25v-.833zm-6.5 0h3.25V40h-3.25v-.833zM0 9.5c.01-.5.154-.99.417-1.417l.666.417c-.17.305-.256.65-.25 1v2H0v-2z"></path>
          </g>
          <text x="-16" y="50" font-size="5px">${text}</text>
        </svg>
      </div>
    </div>
   </mj-text>
  `;
}
var js = { exports: {} };
var src = {};
var javascript = { exports: {} };
var beautifier$2 = {};
var output = {};
function OutputLine(parent) {
  this.__parent = parent;
  this.__character_count = 0;
  this.__indent_count = -1;
  this.__alignment_count = 0;
  this.__wrap_point_index = 0;
  this.__wrap_point_character_count = 0;
  this.__wrap_point_indent_count = -1;
  this.__wrap_point_alignment_count = 0;
  this.__items = [];
}
OutputLine.prototype.clone_empty = function() {
  var line = new OutputLine(this.__parent);
  line.set_indent(this.__indent_count, this.__alignment_count);
  return line;
};
OutputLine.prototype.item = function(index2) {
  if (index2 < 0) {
    return this.__items[this.__items.length + index2];
  } else {
    return this.__items[index2];
  }
};
OutputLine.prototype.has_match = function(pattern2) {
  for (var lastCheckedOutput = this.__items.length - 1; lastCheckedOutput >= 0; lastCheckedOutput--) {
    if (this.__items[lastCheckedOutput].match(pattern2)) {
      return true;
    }
  }
  return false;
};
OutputLine.prototype.set_indent = function(indent, alignment) {
  if (this.is_empty()) {
    this.__indent_count = indent || 0;
    this.__alignment_count = alignment || 0;
    this.__character_count = this.__parent.get_indent_size(this.__indent_count, this.__alignment_count);
  }
};
OutputLine.prototype._set_wrap_point = function() {
  if (this.__parent.wrap_line_length) {
    this.__wrap_point_index = this.__items.length;
    this.__wrap_point_character_count = this.__character_count;
    this.__wrap_point_indent_count = this.__parent.next_line.__indent_count;
    this.__wrap_point_alignment_count = this.__parent.next_line.__alignment_count;
  }
};
OutputLine.prototype._should_wrap = function() {
  return this.__wrap_point_index && this.__character_count > this.__parent.wrap_line_length && this.__wrap_point_character_count > this.__parent.next_line.__character_count;
};
OutputLine.prototype._allow_wrap = function() {
  if (this._should_wrap()) {
    this.__parent.add_new_line();
    var next = this.__parent.current_line;
    next.set_indent(this.__wrap_point_indent_count, this.__wrap_point_alignment_count);
    next.__items = this.__items.slice(this.__wrap_point_index);
    this.__items = this.__items.slice(0, this.__wrap_point_index);
    next.__character_count += this.__character_count - this.__wrap_point_character_count;
    this.__character_count = this.__wrap_point_character_count;
    if (next.__items[0] === " ") {
      next.__items.splice(0, 1);
      next.__character_count -= 1;
    }
    return true;
  }
  return false;
};
OutputLine.prototype.is_empty = function() {
  return this.__items.length === 0;
};
OutputLine.prototype.last = function() {
  if (!this.is_empty()) {
    return this.__items[this.__items.length - 1];
  } else {
    return null;
  }
};
OutputLine.prototype.push = function(item) {
  this.__items.push(item);
  var last_newline_index = item.lastIndexOf("\n");
  if (last_newline_index !== -1) {
    this.__character_count = item.length - last_newline_index;
  } else {
    this.__character_count += item.length;
  }
};
OutputLine.prototype.pop = function() {
  var item = null;
  if (!this.is_empty()) {
    item = this.__items.pop();
    this.__character_count -= item.length;
  }
  return item;
};
OutputLine.prototype._remove_indent = function() {
  if (this.__indent_count > 0) {
    this.__indent_count -= 1;
    this.__character_count -= this.__parent.indent_size;
  }
};
OutputLine.prototype._remove_wrap_indent = function() {
  if (this.__wrap_point_indent_count > 0) {
    this.__wrap_point_indent_count -= 1;
  }
};
OutputLine.prototype.trim = function() {
  while (this.last() === " ") {
    this.__items.pop();
    this.__character_count -= 1;
  }
};
OutputLine.prototype.toString = function() {
  var result = "";
  if (this.is_empty()) {
    if (this.__parent.indent_empty_lines) {
      result = this.__parent.get_indent_string(this.__indent_count);
    }
  } else {
    result = this.__parent.get_indent_string(this.__indent_count, this.__alignment_count);
    result += this.__items.join("");
  }
  return result;
};
function IndentStringCache(options2, baseIndentString) {
  this.__cache = [""];
  this.__indent_size = options2.indent_size;
  this.__indent_string = options2.indent_char;
  if (!options2.indent_with_tabs) {
    this.__indent_string = new Array(options2.indent_size + 1).join(options2.indent_char);
  }
  baseIndentString = baseIndentString || "";
  if (options2.indent_level > 0) {
    baseIndentString = new Array(options2.indent_level + 1).join(this.__indent_string);
  }
  this.__base_string = baseIndentString;
  this.__base_string_length = baseIndentString.length;
}
IndentStringCache.prototype.get_indent_size = function(indent, column) {
  var result = this.__base_string_length;
  column = column || 0;
  if (indent < 0) {
    result = 0;
  }
  result += indent * this.__indent_size;
  result += column;
  return result;
};
IndentStringCache.prototype.get_indent_string = function(indent_level, column) {
  var result = this.__base_string;
  column = column || 0;
  if (indent_level < 0) {
    indent_level = 0;
    result = "";
  }
  column += indent_level * this.__indent_size;
  this.__ensure_cache(column);
  result += this.__cache[column];
  return result;
};
IndentStringCache.prototype.__ensure_cache = function(column) {
  while (column >= this.__cache.length) {
    this.__add_column();
  }
};
IndentStringCache.prototype.__add_column = function() {
  var column = this.__cache.length;
  var indent = 0;
  var result = "";
  if (this.__indent_size && column >= this.__indent_size) {
    indent = Math.floor(column / this.__indent_size);
    column -= indent * this.__indent_size;
    result = new Array(indent + 1).join(this.__indent_string);
  }
  if (column) {
    result += new Array(column + 1).join(" ");
  }
  this.__cache.push(result);
};
function Output$4(options2, baseIndentString) {
  this.__indent_cache = new IndentStringCache(options2, baseIndentString);
  this.raw = false;
  this._end_with_newline = options2.end_with_newline;
  this.indent_size = options2.indent_size;
  this.wrap_line_length = options2.wrap_line_length;
  this.indent_empty_lines = options2.indent_empty_lines;
  this.__lines = [];
  this.previous_line = null;
  this.current_line = null;
  this.next_line = new OutputLine(this);
  this.space_before_token = false;
  this.non_breaking_space = false;
  this.previous_token_wrapped = false;
  this.__add_outputline();
}
Output$4.prototype.__add_outputline = function() {
  this.previous_line = this.current_line;
  this.current_line = this.next_line.clone_empty();
  this.__lines.push(this.current_line);
};
Output$4.prototype.get_line_number = function() {
  return this.__lines.length;
};
Output$4.prototype.get_indent_string = function(indent, column) {
  return this.__indent_cache.get_indent_string(indent, column);
};
Output$4.prototype.get_indent_size = function(indent, column) {
  return this.__indent_cache.get_indent_size(indent, column);
};
Output$4.prototype.is_empty = function() {
  return !this.previous_line && this.current_line.is_empty();
};
Output$4.prototype.add_new_line = function(force_newline) {
  if (this.is_empty() || !force_newline && this.just_added_newline()) {
    return false;
  }
  if (!this.raw) {
    this.__add_outputline();
  }
  return true;
};
Output$4.prototype.get_code = function(eol) {
  this.trim(true);
  var last_item = this.current_line.pop();
  if (last_item) {
    if (last_item[last_item.length - 1] === "\n") {
      last_item = last_item.replace(/\n+$/g, "");
    }
    this.current_line.push(last_item);
  }
  if (this._end_with_newline) {
    this.__add_outputline();
  }
  var sweet_code = this.__lines.join("\n");
  if (eol !== "\n") {
    sweet_code = sweet_code.replace(/[\n]/g, eol);
  }
  return sweet_code;
};
Output$4.prototype.set_wrap_point = function() {
  this.current_line._set_wrap_point();
};
Output$4.prototype.set_indent = function(indent, alignment) {
  indent = indent || 0;
  alignment = alignment || 0;
  this.next_line.set_indent(indent, alignment);
  if (this.__lines.length > 1) {
    this.current_line.set_indent(indent, alignment);
    return true;
  }
  this.current_line.set_indent();
  return false;
};
Output$4.prototype.add_raw_token = function(token2) {
  for (var x = 0; x < token2.newlines; x++) {
    this.__add_outputline();
  }
  this.current_line.set_indent(-1);
  this.current_line.push(token2.whitespace_before);
  this.current_line.push(token2.text);
  this.space_before_token = false;
  this.non_breaking_space = false;
  this.previous_token_wrapped = false;
};
Output$4.prototype.add_token = function(printable_token) {
  this.__add_space_before_token();
  this.current_line.push(printable_token);
  this.space_before_token = false;
  this.non_breaking_space = false;
  this.previous_token_wrapped = this.current_line._allow_wrap();
};
Output$4.prototype.__add_space_before_token = function() {
  if (this.space_before_token && !this.just_added_newline()) {
    if (!this.non_breaking_space) {
      this.set_wrap_point();
    }
    this.current_line.push(" ");
  }
};
Output$4.prototype.remove_indent = function(index2) {
  var output_length = this.__lines.length;
  while (index2 < output_length) {
    this.__lines[index2]._remove_indent();
    index2++;
  }
  this.current_line._remove_wrap_indent();
};
Output$4.prototype.trim = function(eat_newlines) {
  eat_newlines = eat_newlines === void 0 ? false : eat_newlines;
  this.current_line.trim();
  while (eat_newlines && this.__lines.length > 1 && this.current_line.is_empty()) {
    this.__lines.pop();
    this.current_line = this.__lines[this.__lines.length - 1];
    this.current_line.trim();
  }
  this.previous_line = this.__lines.length > 1 ? this.__lines[this.__lines.length - 2] : null;
};
Output$4.prototype.just_added_newline = function() {
  return this.current_line.is_empty();
};
Output$4.prototype.just_added_blankline = function() {
  return this.is_empty() || this.current_line.is_empty() && this.previous_line.is_empty();
};
Output$4.prototype.ensure_empty_line_above = function(starts_with, ends_with) {
  var index2 = this.__lines.length - 2;
  while (index2 >= 0) {
    var potentialEmptyLine = this.__lines[index2];
    if (potentialEmptyLine.is_empty()) {
      break;
    } else if (potentialEmptyLine.item(0).indexOf(starts_with) !== 0 && potentialEmptyLine.item(-1) !== ends_with) {
      this.__lines.splice(index2 + 1, 0, new OutputLine(this));
      this.previous_line = this.__lines[this.__lines.length - 2];
      break;
    }
    index2--;
  }
};
output.Output = Output$4;
var token = {};
function Token$3(type, text, newlines, whitespace_before) {
  this.type = type;
  this.text = text;
  this.comments_before = null;
  this.newlines = newlines || 0;
  this.whitespace_before = whitespace_before || "";
  this.parent = null;
  this.next = null;
  this.previous = null;
  this.opened = null;
  this.closed = null;
  this.directives = null;
}
token.Token = Token$3;
var acorn$2 = {};
(function(exports) {
  var baseASCIIidentifierStartChars = "\\x23\\x24\\x40\\x41-\\x5a\\x5f\\x61-\\x7a";
  var baseASCIIidentifierChars = "\\x24\\x30-\\x39\\x41-\\x5a\\x5f\\x61-\\x7a";
  var nonASCIIidentifierStartChars = "\\xaa\\xb5\\xba\\xc0-\\xd6\\xd8-\\xf6\\xf8-\\u02c1\\u02c6-\\u02d1\\u02e0-\\u02e4\\u02ec\\u02ee\\u0370-\\u0374\\u0376\\u0377\\u037a-\\u037d\\u0386\\u0388-\\u038a\\u038c\\u038e-\\u03a1\\u03a3-\\u03f5\\u03f7-\\u0481\\u048a-\\u0527\\u0531-\\u0556\\u0559\\u0561-\\u0587\\u05d0-\\u05ea\\u05f0-\\u05f2\\u0620-\\u064a\\u066e\\u066f\\u0671-\\u06d3\\u06d5\\u06e5\\u06e6\\u06ee\\u06ef\\u06fa-\\u06fc\\u06ff\\u0710\\u0712-\\u072f\\u074d-\\u07a5\\u07b1\\u07ca-\\u07ea\\u07f4\\u07f5\\u07fa\\u0800-\\u0815\\u081a\\u0824\\u0828\\u0840-\\u0858\\u08a0\\u08a2-\\u08ac\\u0904-\\u0939\\u093d\\u0950\\u0958-\\u0961\\u0971-\\u0977\\u0979-\\u097f\\u0985-\\u098c\\u098f\\u0990\\u0993-\\u09a8\\u09aa-\\u09b0\\u09b2\\u09b6-\\u09b9\\u09bd\\u09ce\\u09dc\\u09dd\\u09df-\\u09e1\\u09f0\\u09f1\\u0a05-\\u0a0a\\u0a0f\\u0a10\\u0a13-\\u0a28\\u0a2a-\\u0a30\\u0a32\\u0a33\\u0a35\\u0a36\\u0a38\\u0a39\\u0a59-\\u0a5c\\u0a5e\\u0a72-\\u0a74\\u0a85-\\u0a8d\\u0a8f-\\u0a91\\u0a93-\\u0aa8\\u0aaa-\\u0ab0\\u0ab2\\u0ab3\\u0ab5-\\u0ab9\\u0abd\\u0ad0\\u0ae0\\u0ae1\\u0b05-\\u0b0c\\u0b0f\\u0b10\\u0b13-\\u0b28\\u0b2a-\\u0b30\\u0b32\\u0b33\\u0b35-\\u0b39\\u0b3d\\u0b5c\\u0b5d\\u0b5f-\\u0b61\\u0b71\\u0b83\\u0b85-\\u0b8a\\u0b8e-\\u0b90\\u0b92-\\u0b95\\u0b99\\u0b9a\\u0b9c\\u0b9e\\u0b9f\\u0ba3\\u0ba4\\u0ba8-\\u0baa\\u0bae-\\u0bb9\\u0bd0\\u0c05-\\u0c0c\\u0c0e-\\u0c10\\u0c12-\\u0c28\\u0c2a-\\u0c33\\u0c35-\\u0c39\\u0c3d\\u0c58\\u0c59\\u0c60\\u0c61\\u0c85-\\u0c8c\\u0c8e-\\u0c90\\u0c92-\\u0ca8\\u0caa-\\u0cb3\\u0cb5-\\u0cb9\\u0cbd\\u0cde\\u0ce0\\u0ce1\\u0cf1\\u0cf2\\u0d05-\\u0d0c\\u0d0e-\\u0d10\\u0d12-\\u0d3a\\u0d3d\\u0d4e\\u0d60\\u0d61\\u0d7a-\\u0d7f\\u0d85-\\u0d96\\u0d9a-\\u0db1\\u0db3-\\u0dbb\\u0dbd\\u0dc0-\\u0dc6\\u0e01-\\u0e30\\u0e32\\u0e33\\u0e40-\\u0e46\\u0e81\\u0e82\\u0e84\\u0e87\\u0e88\\u0e8a\\u0e8d\\u0e94-\\u0e97\\u0e99-\\u0e9f\\u0ea1-\\u0ea3\\u0ea5\\u0ea7\\u0eaa\\u0eab\\u0ead-\\u0eb0\\u0eb2\\u0eb3\\u0ebd\\u0ec0-\\u0ec4\\u0ec6\\u0edc-\\u0edf\\u0f00\\u0f40-\\u0f47\\u0f49-\\u0f6c\\u0f88-\\u0f8c\\u1000-\\u102a\\u103f\\u1050-\\u1055\\u105a-\\u105d\\u1061\\u1065\\u1066\\u106e-\\u1070\\u1075-\\u1081\\u108e\\u10a0-\\u10c5\\u10c7\\u10cd\\u10d0-\\u10fa\\u10fc-\\u1248\\u124a-\\u124d\\u1250-\\u1256\\u1258\\u125a-\\u125d\\u1260-\\u1288\\u128a-\\u128d\\u1290-\\u12b0\\u12b2-\\u12b5\\u12b8-\\u12be\\u12c0\\u12c2-\\u12c5\\u12c8-\\u12d6\\u12d8-\\u1310\\u1312-\\u1315\\u1318-\\u135a\\u1380-\\u138f\\u13a0-\\u13f4\\u1401-\\u166c\\u166f-\\u167f\\u1681-\\u169a\\u16a0-\\u16ea\\u16ee-\\u16f0\\u1700-\\u170c\\u170e-\\u1711\\u1720-\\u1731\\u1740-\\u1751\\u1760-\\u176c\\u176e-\\u1770\\u1780-\\u17b3\\u17d7\\u17dc\\u1820-\\u1877\\u1880-\\u18a8\\u18aa\\u18b0-\\u18f5\\u1900-\\u191c\\u1950-\\u196d\\u1970-\\u1974\\u1980-\\u19ab\\u19c1-\\u19c7\\u1a00-\\u1a16\\u1a20-\\u1a54\\u1aa7\\u1b05-\\u1b33\\u1b45-\\u1b4b\\u1b83-\\u1ba0\\u1bae\\u1baf\\u1bba-\\u1be5\\u1c00-\\u1c23\\u1c4d-\\u1c4f\\u1c5a-\\u1c7d\\u1ce9-\\u1cec\\u1cee-\\u1cf1\\u1cf5\\u1cf6\\u1d00-\\u1dbf\\u1e00-\\u1f15\\u1f18-\\u1f1d\\u1f20-\\u1f45\\u1f48-\\u1f4d\\u1f50-\\u1f57\\u1f59\\u1f5b\\u1f5d\\u1f5f-\\u1f7d\\u1f80-\\u1fb4\\u1fb6-\\u1fbc\\u1fbe\\u1fc2-\\u1fc4\\u1fc6-\\u1fcc\\u1fd0-\\u1fd3\\u1fd6-\\u1fdb\\u1fe0-\\u1fec\\u1ff2-\\u1ff4\\u1ff6-\\u1ffc\\u2071\\u207f\\u2090-\\u209c\\u2102\\u2107\\u210a-\\u2113\\u2115\\u2119-\\u211d\\u2124\\u2126\\u2128\\u212a-\\u212d\\u212f-\\u2139\\u213c-\\u213f\\u2145-\\u2149\\u214e\\u2160-\\u2188\\u2c00-\\u2c2e\\u2c30-\\u2c5e\\u2c60-\\u2ce4\\u2ceb-\\u2cee\\u2cf2\\u2cf3\\u2d00-\\u2d25\\u2d27\\u2d2d\\u2d30-\\u2d67\\u2d6f\\u2d80-\\u2d96\\u2da0-\\u2da6\\u2da8-\\u2dae\\u2db0-\\u2db6\\u2db8-\\u2dbe\\u2dc0-\\u2dc6\\u2dc8-\\u2dce\\u2dd0-\\u2dd6\\u2dd8-\\u2dde\\u2e2f\\u3005-\\u3007\\u3021-\\u3029\\u3031-\\u3035\\u3038-\\u303c\\u3041-\\u3096\\u309d-\\u309f\\u30a1-\\u30fa\\u30fc-\\u30ff\\u3105-\\u312d\\u3131-\\u318e\\u31a0-\\u31ba\\u31f0-\\u31ff\\u3400-\\u4db5\\u4e00-\\u9fcc\\ua000-\\ua48c\\ua4d0-\\ua4fd\\ua500-\\ua60c\\ua610-\\ua61f\\ua62a\\ua62b\\ua640-\\ua66e\\ua67f-\\ua697\\ua6a0-\\ua6ef\\ua717-\\ua71f\\ua722-\\ua788\\ua78b-\\ua78e\\ua790-\\ua793\\ua7a0-\\ua7aa\\ua7f8-\\ua801\\ua803-\\ua805\\ua807-\\ua80a\\ua80c-\\ua822\\ua840-\\ua873\\ua882-\\ua8b3\\ua8f2-\\ua8f7\\ua8fb\\ua90a-\\ua925\\ua930-\\ua946\\ua960-\\ua97c\\ua984-\\ua9b2\\ua9cf\\uaa00-\\uaa28\\uaa40-\\uaa42\\uaa44-\\uaa4b\\uaa60-\\uaa76\\uaa7a\\uaa80-\\uaaaf\\uaab1\\uaab5\\uaab6\\uaab9-\\uaabd\\uaac0\\uaac2\\uaadb-\\uaadd\\uaae0-\\uaaea\\uaaf2-\\uaaf4\\uab01-\\uab06\\uab09-\\uab0e\\uab11-\\uab16\\uab20-\\uab26\\uab28-\\uab2e\\uabc0-\\uabe2\\uac00-\\ud7a3\\ud7b0-\\ud7c6\\ud7cb-\\ud7fb\\uf900-\\ufa6d\\ufa70-\\ufad9\\ufb00-\\ufb06\\ufb13-\\ufb17\\ufb1d\\ufb1f-\\ufb28\\ufb2a-\\ufb36\\ufb38-\\ufb3c\\ufb3e\\ufb40\\ufb41\\ufb43\\ufb44\\ufb46-\\ufbb1\\ufbd3-\\ufd3d\\ufd50-\\ufd8f\\ufd92-\\ufdc7\\ufdf0-\\ufdfb\\ufe70-\\ufe74\\ufe76-\\ufefc\\uff21-\\uff3a\\uff41-\\uff5a\\uff66-\\uffbe\\uffc2-\\uffc7\\uffca-\\uffcf\\uffd2-\\uffd7\\uffda-\\uffdc";
  var nonASCIIidentifierChars = "\\u0300-\\u036f\\u0483-\\u0487\\u0591-\\u05bd\\u05bf\\u05c1\\u05c2\\u05c4\\u05c5\\u05c7\\u0610-\\u061a\\u0620-\\u0649\\u0672-\\u06d3\\u06e7-\\u06e8\\u06fb-\\u06fc\\u0730-\\u074a\\u0800-\\u0814\\u081b-\\u0823\\u0825-\\u0827\\u0829-\\u082d\\u0840-\\u0857\\u08e4-\\u08fe\\u0900-\\u0903\\u093a-\\u093c\\u093e-\\u094f\\u0951-\\u0957\\u0962-\\u0963\\u0966-\\u096f\\u0981-\\u0983\\u09bc\\u09be-\\u09c4\\u09c7\\u09c8\\u09d7\\u09df-\\u09e0\\u0a01-\\u0a03\\u0a3c\\u0a3e-\\u0a42\\u0a47\\u0a48\\u0a4b-\\u0a4d\\u0a51\\u0a66-\\u0a71\\u0a75\\u0a81-\\u0a83\\u0abc\\u0abe-\\u0ac5\\u0ac7-\\u0ac9\\u0acb-\\u0acd\\u0ae2-\\u0ae3\\u0ae6-\\u0aef\\u0b01-\\u0b03\\u0b3c\\u0b3e-\\u0b44\\u0b47\\u0b48\\u0b4b-\\u0b4d\\u0b56\\u0b57\\u0b5f-\\u0b60\\u0b66-\\u0b6f\\u0b82\\u0bbe-\\u0bc2\\u0bc6-\\u0bc8\\u0bca-\\u0bcd\\u0bd7\\u0be6-\\u0bef\\u0c01-\\u0c03\\u0c46-\\u0c48\\u0c4a-\\u0c4d\\u0c55\\u0c56\\u0c62-\\u0c63\\u0c66-\\u0c6f\\u0c82\\u0c83\\u0cbc\\u0cbe-\\u0cc4\\u0cc6-\\u0cc8\\u0cca-\\u0ccd\\u0cd5\\u0cd6\\u0ce2-\\u0ce3\\u0ce6-\\u0cef\\u0d02\\u0d03\\u0d46-\\u0d48\\u0d57\\u0d62-\\u0d63\\u0d66-\\u0d6f\\u0d82\\u0d83\\u0dca\\u0dcf-\\u0dd4\\u0dd6\\u0dd8-\\u0ddf\\u0df2\\u0df3\\u0e34-\\u0e3a\\u0e40-\\u0e45\\u0e50-\\u0e59\\u0eb4-\\u0eb9\\u0ec8-\\u0ecd\\u0ed0-\\u0ed9\\u0f18\\u0f19\\u0f20-\\u0f29\\u0f35\\u0f37\\u0f39\\u0f41-\\u0f47\\u0f71-\\u0f84\\u0f86-\\u0f87\\u0f8d-\\u0f97\\u0f99-\\u0fbc\\u0fc6\\u1000-\\u1029\\u1040-\\u1049\\u1067-\\u106d\\u1071-\\u1074\\u1082-\\u108d\\u108f-\\u109d\\u135d-\\u135f\\u170e-\\u1710\\u1720-\\u1730\\u1740-\\u1750\\u1772\\u1773\\u1780-\\u17b2\\u17dd\\u17e0-\\u17e9\\u180b-\\u180d\\u1810-\\u1819\\u1920-\\u192b\\u1930-\\u193b\\u1951-\\u196d\\u19b0-\\u19c0\\u19c8-\\u19c9\\u19d0-\\u19d9\\u1a00-\\u1a15\\u1a20-\\u1a53\\u1a60-\\u1a7c\\u1a7f-\\u1a89\\u1a90-\\u1a99\\u1b46-\\u1b4b\\u1b50-\\u1b59\\u1b6b-\\u1b73\\u1bb0-\\u1bb9\\u1be6-\\u1bf3\\u1c00-\\u1c22\\u1c40-\\u1c49\\u1c5b-\\u1c7d\\u1cd0-\\u1cd2\\u1d00-\\u1dbe\\u1e01-\\u1f15\\u200c\\u200d\\u203f\\u2040\\u2054\\u20d0-\\u20dc\\u20e1\\u20e5-\\u20f0\\u2d81-\\u2d96\\u2de0-\\u2dff\\u3021-\\u3028\\u3099\\u309a\\ua640-\\ua66d\\ua674-\\ua67d\\ua69f\\ua6f0-\\ua6f1\\ua7f8-\\ua800\\ua806\\ua80b\\ua823-\\ua827\\ua880-\\ua881\\ua8b4-\\ua8c4\\ua8d0-\\ua8d9\\ua8f3-\\ua8f7\\ua900-\\ua909\\ua926-\\ua92d\\ua930-\\ua945\\ua980-\\ua983\\ua9b3-\\ua9c0\\uaa00-\\uaa27\\uaa40-\\uaa41\\uaa4c-\\uaa4d\\uaa50-\\uaa59\\uaa7b\\uaae0-\\uaae9\\uaaf2-\\uaaf3\\uabc0-\\uabe1\\uabec\\uabed\\uabf0-\\uabf9\\ufb20-\\ufb28\\ufe00-\\ufe0f\\ufe20-\\ufe26\\ufe33\\ufe34\\ufe4d-\\ufe4f\\uff10-\\uff19\\uff3f";
  var identifierStart = "(?:\\\\u[0-9a-fA-F]{4}|[" + baseASCIIidentifierStartChars + nonASCIIidentifierStartChars + "])";
  var identifierChars = "(?:\\\\u[0-9a-fA-F]{4}|[" + baseASCIIidentifierChars + nonASCIIidentifierStartChars + nonASCIIidentifierChars + "])*";
  exports.identifier = new RegExp(identifierStart + identifierChars, "g");
  exports.identifierStart = new RegExp(identifierStart);
  exports.identifierMatch = new RegExp("(?:\\\\u[0-9a-fA-F]{4}|[" + baseASCIIidentifierChars + nonASCIIidentifierStartChars + nonASCIIidentifierChars + "])+");
  exports.newline = /[\n\r\u2028\u2029]/;
  exports.lineBreak = new RegExp("\r\n|" + exports.newline.source);
  exports.allLineBreaks = new RegExp(exports.lineBreak.source, "g");
})(acorn$2);
var options$3 = {};
var options$2 = {};
function Options$9(options2, merge_child_field) {
  this.raw_options = _mergeOpts(options2, merge_child_field);
  this.disabled = this._get_boolean("disabled");
  this.eol = this._get_characters("eol", "auto");
  this.end_with_newline = this._get_boolean("end_with_newline");
  this.indent_size = this._get_number("indent_size", 4);
  this.indent_char = this._get_characters("indent_char", " ");
  this.indent_level = this._get_number("indent_level");
  this.preserve_newlines = this._get_boolean("preserve_newlines", true);
  this.max_preserve_newlines = this._get_number("max_preserve_newlines", 32786);
  if (!this.preserve_newlines) {
    this.max_preserve_newlines = 0;
  }
  this.indent_with_tabs = this._get_boolean("indent_with_tabs", this.indent_char === "	");
  if (this.indent_with_tabs) {
    this.indent_char = "	";
    if (this.indent_size === 1) {
      this.indent_size = 4;
    }
  }
  this.wrap_line_length = this._get_number("wrap_line_length", this._get_number("max_char"));
  this.indent_empty_lines = this._get_boolean("indent_empty_lines");
  this.templating = this._get_selection_list("templating", ["auto", "none", "django", "erb", "handlebars", "php", "smarty"], ["auto"]);
}
Options$9.prototype._get_array = function(name, default_value) {
  var option_value = this.raw_options[name];
  var result = default_value || [];
  if (typeof option_value === "object") {
    if (option_value !== null && typeof option_value.concat === "function") {
      result = option_value.concat();
    }
  } else if (typeof option_value === "string") {
    result = option_value.split(/[^a-zA-Z0-9_\/\-]+/);
  }
  return result;
};
Options$9.prototype._get_boolean = function(name, default_value) {
  var option_value = this.raw_options[name];
  var result = option_value === void 0 ? !!default_value : !!option_value;
  return result;
};
Options$9.prototype._get_characters = function(name, default_value) {
  var option_value = this.raw_options[name];
  var result = default_value || "";
  if (typeof option_value === "string") {
    result = option_value.replace(/\\r/, "\r").replace(/\\n/, "\n").replace(/\\t/, "	");
  }
  return result;
};
Options$9.prototype._get_number = function(name, default_value) {
  var option_value = this.raw_options[name];
  default_value = parseInt(default_value, 10);
  if (isNaN(default_value)) {
    default_value = 0;
  }
  var result = parseInt(option_value, 10);
  if (isNaN(result)) {
    result = default_value;
  }
  return result;
};
Options$9.prototype._get_selection = function(name, selection_list, default_value) {
  var result = this._get_selection_list(name, selection_list, default_value);
  if (result.length !== 1) {
    throw new Error("Invalid Option Value: The option '" + name + "' can only be one of the following values:\n" + selection_list + "\nYou passed in: '" + this.raw_options[name] + "'");
  }
  return result[0];
};
Options$9.prototype._get_selection_list = function(name, selection_list, default_value) {
  if (!selection_list || selection_list.length === 0) {
    throw new Error("Selection list cannot be empty.");
  }
  default_value = default_value || [selection_list[0]];
  if (!this._is_valid_selection(default_value, selection_list)) {
    throw new Error("Invalid Default Value!");
  }
  var result = this._get_array(name, default_value);
  if (!this._is_valid_selection(result, selection_list)) {
    throw new Error("Invalid Option Value: The option '" + name + "' can contain only the following values:\n" + selection_list + "\nYou passed in: '" + this.raw_options[name] + "'");
  }
  return result;
};
Options$9.prototype._is_valid_selection = function(result, selection_list) {
  return result.length && selection_list.length && !result.some(function(item) {
    return selection_list.indexOf(item) === -1;
  });
};
function _mergeOpts(allOptions, childFieldName) {
  var finalOpts = {};
  allOptions = _normalizeOpts(allOptions);
  var name;
  for (name in allOptions) {
    if (name !== childFieldName) {
      finalOpts[name] = allOptions[name];
    }
  }
  if (childFieldName && allOptions[childFieldName]) {
    for (name in allOptions[childFieldName]) {
      finalOpts[name] = allOptions[childFieldName][name];
    }
  }
  return finalOpts;
}
function _normalizeOpts(options2) {
  var convertedOpts = {};
  var key;
  for (key in options2) {
    var newKey = key.replace(/-/g, "_");
    convertedOpts[newKey] = options2[key];
  }
  return convertedOpts;
}
options$2.Options = Options$9;
options$2.normalizeOpts = _normalizeOpts;
options$2.mergeOpts = _mergeOpts;
var BaseOptions$2 = options$2.Options;
var validPositionValues$1 = ["before-newline", "after-newline", "preserve-newline"];
function Options$8(options2) {
  BaseOptions$2.call(this, options2, "js");
  var raw_brace_style = this.raw_options.brace_style || null;
  if (raw_brace_style === "expand-strict") {
    this.raw_options.brace_style = "expand";
  } else if (raw_brace_style === "collapse-preserve-inline") {
    this.raw_options.brace_style = "collapse,preserve-inline";
  } else if (this.raw_options.braces_on_own_line !== void 0) {
    this.raw_options.brace_style = this.raw_options.braces_on_own_line ? "expand" : "collapse";
  }
  var brace_style_split = this._get_selection_list("brace_style", ["collapse", "expand", "end-expand", "none", "preserve-inline"]);
  this.brace_preserve_inline = false;
  this.brace_style = "collapse";
  for (var bs = 0; bs < brace_style_split.length; bs++) {
    if (brace_style_split[bs] === "preserve-inline") {
      this.brace_preserve_inline = true;
    } else {
      this.brace_style = brace_style_split[bs];
    }
  }
  this.unindent_chained_methods = this._get_boolean("unindent_chained_methods");
  this.break_chained_methods = this._get_boolean("break_chained_methods");
  this.space_in_paren = this._get_boolean("space_in_paren");
  this.space_in_empty_paren = this._get_boolean("space_in_empty_paren");
  this.jslint_happy = this._get_boolean("jslint_happy");
  this.space_after_anon_function = this._get_boolean("space_after_anon_function");
  this.space_after_named_function = this._get_boolean("space_after_named_function");
  this.keep_array_indentation = this._get_boolean("keep_array_indentation");
  this.space_before_conditional = this._get_boolean("space_before_conditional", true);
  this.unescape_strings = this._get_boolean("unescape_strings");
  this.e4x = this._get_boolean("e4x");
  this.comma_first = this._get_boolean("comma_first");
  this.operator_position = this._get_selection("operator_position", validPositionValues$1);
  this.test_output_raw = this._get_boolean("test_output_raw");
  if (this.jslint_happy) {
    this.space_after_anon_function = true;
  }
}
Options$8.prototype = new BaseOptions$2();
options$3.Options = Options$8;
var tokenizer$2 = {};
var inputscanner = {};
var regexp_has_sticky = RegExp.prototype.hasOwnProperty("sticky");
function InputScanner$3(input_string) {
  this.__input = input_string || "";
  this.__input_length = this.__input.length;
  this.__position = 0;
}
InputScanner$3.prototype.restart = function() {
  this.__position = 0;
};
InputScanner$3.prototype.back = function() {
  if (this.__position > 0) {
    this.__position -= 1;
  }
};
InputScanner$3.prototype.hasNext = function() {
  return this.__position < this.__input_length;
};
InputScanner$3.prototype.next = function() {
  var val = null;
  if (this.hasNext()) {
    val = this.__input.charAt(this.__position);
    this.__position += 1;
  }
  return val;
};
InputScanner$3.prototype.peek = function(index2) {
  var val = null;
  index2 = index2 || 0;
  index2 += this.__position;
  if (index2 >= 0 && index2 < this.__input_length) {
    val = this.__input.charAt(index2);
  }
  return val;
};
InputScanner$3.prototype.__match = function(pattern2, index2) {
  pattern2.lastIndex = index2;
  var pattern_match = pattern2.exec(this.__input);
  if (pattern_match && !(regexp_has_sticky && pattern2.sticky)) {
    if (pattern_match.index !== index2) {
      pattern_match = null;
    }
  }
  return pattern_match;
};
InputScanner$3.prototype.test = function(pattern2, index2) {
  index2 = index2 || 0;
  index2 += this.__position;
  if (index2 >= 0 && index2 < this.__input_length) {
    return !!this.__match(pattern2, index2);
  } else {
    return false;
  }
};
InputScanner$3.prototype.testChar = function(pattern2, index2) {
  var val = this.peek(index2);
  pattern2.lastIndex = 0;
  return val !== null && pattern2.test(val);
};
InputScanner$3.prototype.match = function(pattern2) {
  var pattern_match = this.__match(pattern2, this.__position);
  if (pattern_match) {
    this.__position += pattern_match[0].length;
  } else {
    pattern_match = null;
  }
  return pattern_match;
};
InputScanner$3.prototype.read = function(starting_pattern, until_pattern, until_after) {
  var val = "";
  var match;
  if (starting_pattern) {
    match = this.match(starting_pattern);
    if (match) {
      val += match[0];
    }
  }
  if (until_pattern && (match || !starting_pattern)) {
    val += this.readUntil(until_pattern, until_after);
  }
  return val;
};
InputScanner$3.prototype.readUntil = function(pattern2, until_after) {
  var val = "";
  var match_index = this.__position;
  pattern2.lastIndex = this.__position;
  var pattern_match = pattern2.exec(this.__input);
  if (pattern_match) {
    match_index = pattern_match.index;
    if (until_after) {
      match_index += pattern_match[0].length;
    }
  } else {
    match_index = this.__input_length;
  }
  val = this.__input.substring(this.__position, match_index);
  this.__position = match_index;
  return val;
};
InputScanner$3.prototype.readUntilAfter = function(pattern2) {
  return this.readUntil(pattern2, true);
};
InputScanner$3.prototype.get_regexp = function(pattern2, match_from) {
  var result = null;
  var flags = "g";
  if (match_from && regexp_has_sticky) {
    flags = "y";
  }
  if (typeof pattern2 === "string" && pattern2 !== "") {
    result = new RegExp(pattern2, flags);
  } else if (pattern2) {
    result = new RegExp(pattern2.source, flags);
  }
  return result;
};
InputScanner$3.prototype.get_literal_regexp = function(literal_string) {
  return RegExp(literal_string.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"));
};
InputScanner$3.prototype.peekUntilAfter = function(pattern2) {
  var start = this.__position;
  var val = this.readUntilAfter(pattern2);
  this.__position = start;
  return val;
};
InputScanner$3.prototype.lookBack = function(testVal) {
  var start = this.__position - 1;
  return start >= testVal.length && this.__input.substring(start - testVal.length, start).toLowerCase() === testVal;
};
inputscanner.InputScanner = InputScanner$3;
var tokenizer$1 = {};
var tokenstream = {};
function TokenStream$1(parent_token) {
  this.__tokens = [];
  this.__tokens_length = this.__tokens.length;
  this.__position = 0;
  this.__parent_token = parent_token;
}
TokenStream$1.prototype.restart = function() {
  this.__position = 0;
};
TokenStream$1.prototype.isEmpty = function() {
  return this.__tokens_length === 0;
};
TokenStream$1.prototype.hasNext = function() {
  return this.__position < this.__tokens_length;
};
TokenStream$1.prototype.next = function() {
  var val = null;
  if (this.hasNext()) {
    val = this.__tokens[this.__position];
    this.__position += 1;
  }
  return val;
};
TokenStream$1.prototype.peek = function(index2) {
  var val = null;
  index2 = index2 || 0;
  index2 += this.__position;
  if (index2 >= 0 && index2 < this.__tokens_length) {
    val = this.__tokens[index2];
  }
  return val;
};
TokenStream$1.prototype.add = function(token2) {
  if (this.__parent_token) {
    token2.parent = this.__parent_token;
  }
  this.__tokens.push(token2);
  this.__tokens_length += 1;
};
tokenstream.TokenStream = TokenStream$1;
var whitespacepattern = {};
var pattern = {};
function Pattern$4(input_scanner, parent) {
  this._input = input_scanner;
  this._starting_pattern = null;
  this._match_pattern = null;
  this._until_pattern = null;
  this._until_after = false;
  if (parent) {
    this._starting_pattern = this._input.get_regexp(parent._starting_pattern, true);
    this._match_pattern = this._input.get_regexp(parent._match_pattern, true);
    this._until_pattern = this._input.get_regexp(parent._until_pattern);
    this._until_after = parent._until_after;
  }
}
Pattern$4.prototype.read = function() {
  var result = this._input.read(this._starting_pattern);
  if (!this._starting_pattern || result) {
    result += this._input.read(this._match_pattern, this._until_pattern, this._until_after);
  }
  return result;
};
Pattern$4.prototype.read_match = function() {
  return this._input.match(this._match_pattern);
};
Pattern$4.prototype.until_after = function(pattern2) {
  var result = this._create();
  result._until_after = true;
  result._until_pattern = this._input.get_regexp(pattern2);
  result._update();
  return result;
};
Pattern$4.prototype.until = function(pattern2) {
  var result = this._create();
  result._until_after = false;
  result._until_pattern = this._input.get_regexp(pattern2);
  result._update();
  return result;
};
Pattern$4.prototype.starting_with = function(pattern2) {
  var result = this._create();
  result._starting_pattern = this._input.get_regexp(pattern2, true);
  result._update();
  return result;
};
Pattern$4.prototype.matching = function(pattern2) {
  var result = this._create();
  result._match_pattern = this._input.get_regexp(pattern2, true);
  result._update();
  return result;
};
Pattern$4.prototype._create = function() {
  return new Pattern$4(this._input, this);
};
Pattern$4.prototype._update = function() {
};
pattern.Pattern = Pattern$4;
var Pattern$3 = pattern.Pattern;
function WhitespacePattern$1(input_scanner, parent) {
  Pattern$3.call(this, input_scanner, parent);
  if (parent) {
    this._line_regexp = this._input.get_regexp(parent._line_regexp);
  } else {
    this.__set_whitespace_patterns("", "");
  }
  this.newline_count = 0;
  this.whitespace_before_token = "";
}
WhitespacePattern$1.prototype = new Pattern$3();
WhitespacePattern$1.prototype.__set_whitespace_patterns = function(whitespace_chars, newline_chars) {
  whitespace_chars += "\\t ";
  newline_chars += "\\n\\r";
  this._match_pattern = this._input.get_regexp("[" + whitespace_chars + newline_chars + "]+", true);
  this._newline_regexp = this._input.get_regexp("\\r\\n|[" + newline_chars + "]");
};
WhitespacePattern$1.prototype.read = function() {
  this.newline_count = 0;
  this.whitespace_before_token = "";
  var resulting_string = this._input.read(this._match_pattern);
  if (resulting_string === " ") {
    this.whitespace_before_token = " ";
  } else if (resulting_string) {
    var matches = this.__split(this._newline_regexp, resulting_string);
    this.newline_count = matches.length - 1;
    this.whitespace_before_token = matches[this.newline_count];
  }
  return resulting_string;
};
WhitespacePattern$1.prototype.matching = function(whitespace_chars, newline_chars) {
  var result = this._create();
  result.__set_whitespace_patterns(whitespace_chars, newline_chars);
  result._update();
  return result;
};
WhitespacePattern$1.prototype._create = function() {
  return new WhitespacePattern$1(this._input, this);
};
WhitespacePattern$1.prototype.__split = function(regexp, input_string) {
  regexp.lastIndex = 0;
  var start_index = 0;
  var result = [];
  var next_match = regexp.exec(input_string);
  while (next_match) {
    result.push(input_string.substring(start_index, next_match.index));
    start_index = next_match.index + next_match[0].length;
    next_match = regexp.exec(input_string);
  }
  if (start_index < input_string.length) {
    result.push(input_string.substring(start_index, input_string.length));
  } else {
    result.push("");
  }
  return result;
};
whitespacepattern.WhitespacePattern = WhitespacePattern$1;
var InputScanner$2 = inputscanner.InputScanner;
var Token$2 = token.Token;
var TokenStream = tokenstream.TokenStream;
var WhitespacePattern = whitespacepattern.WhitespacePattern;
var TOKEN$4 = {
  START: "TK_START",
  RAW: "TK_RAW",
  EOF: "TK_EOF"
};
var Tokenizer$5 = function(input_string, options2) {
  this._input = new InputScanner$2(input_string);
  this._options = options2 || {};
  this.__tokens = null;
  this._patterns = {};
  this._patterns.whitespace = new WhitespacePattern(this._input);
};
Tokenizer$5.prototype.tokenize = function() {
  this._input.restart();
  this.__tokens = new TokenStream();
  this._reset();
  var current;
  var previous = new Token$2(TOKEN$4.START, "");
  var open_token = null;
  var open_stack = [];
  var comments = new TokenStream();
  while (previous.type !== TOKEN$4.EOF) {
    current = this._get_next_token(previous, open_token);
    while (this._is_comment(current)) {
      comments.add(current);
      current = this._get_next_token(previous, open_token);
    }
    if (!comments.isEmpty()) {
      current.comments_before = comments;
      comments = new TokenStream();
    }
    current.parent = open_token;
    if (this._is_opening(current)) {
      open_stack.push(open_token);
      open_token = current;
    } else if (open_token && this._is_closing(current, open_token)) {
      current.opened = open_token;
      open_token.closed = current;
      open_token = open_stack.pop();
      current.parent = open_token;
    }
    current.previous = previous;
    previous.next = current;
    this.__tokens.add(current);
    previous = current;
  }
  return this.__tokens;
};
Tokenizer$5.prototype._is_first_token = function() {
  return this.__tokens.isEmpty();
};
Tokenizer$5.prototype._reset = function() {
};
Tokenizer$5.prototype._get_next_token = function(previous_token, open_token) {
  this._readWhitespace();
  var resulting_string = this._input.read(/.+/g);
  if (resulting_string) {
    return this._create_token(TOKEN$4.RAW, resulting_string);
  } else {
    return this._create_token(TOKEN$4.EOF, "");
  }
};
Tokenizer$5.prototype._is_comment = function(current_token) {
  return false;
};
Tokenizer$5.prototype._is_opening = function(current_token) {
  return false;
};
Tokenizer$5.prototype._is_closing = function(current_token, open_token) {
  return false;
};
Tokenizer$5.prototype._create_token = function(type, text) {
  var token2 = new Token$2(type, text, this._patterns.whitespace.newline_count, this._patterns.whitespace.whitespace_before_token);
  return token2;
};
Tokenizer$5.prototype._readWhitespace = function() {
  return this._patterns.whitespace.read();
};
tokenizer$1.Tokenizer = Tokenizer$5;
tokenizer$1.TOKEN = TOKEN$4;
var directives = {};
function Directives$3(start_block_pattern, end_block_pattern) {
  start_block_pattern = typeof start_block_pattern === "string" ? start_block_pattern : start_block_pattern.source;
  end_block_pattern = typeof end_block_pattern === "string" ? end_block_pattern : end_block_pattern.source;
  this.__directives_block_pattern = new RegExp(start_block_pattern + / beautify( \w+[:]\w+)+ /.source + end_block_pattern, "g");
  this.__directive_pattern = / (\w+)[:](\w+)/g;
  this.__directives_end_ignore_pattern = new RegExp(start_block_pattern + /\sbeautify\signore:end\s/.source + end_block_pattern, "g");
}
Directives$3.prototype.get_directives = function(text) {
  if (!text.match(this.__directives_block_pattern)) {
    return null;
  }
  var directives2 = {};
  this.__directive_pattern.lastIndex = 0;
  var directive_match = this.__directive_pattern.exec(text);
  while (directive_match) {
    directives2[directive_match[1]] = directive_match[2];
    directive_match = this.__directive_pattern.exec(text);
  }
  return directives2;
};
Directives$3.prototype.readIgnored = function(input) {
  return input.readUntilAfter(this.__directives_end_ignore_pattern);
};
directives.Directives = Directives$3;
var templatablepattern = {};
var Pattern$2 = pattern.Pattern;
var template_names = {
  django: false,
  erb: false,
  handlebars: false,
  php: false,
  smarty: false
};
function TemplatablePattern$2(input_scanner, parent) {
  Pattern$2.call(this, input_scanner, parent);
  this.__template_pattern = null;
  this._disabled = Object.assign({}, template_names);
  this._excluded = Object.assign({}, template_names);
  if (parent) {
    this.__template_pattern = this._input.get_regexp(parent.__template_pattern);
    this._excluded = Object.assign(this._excluded, parent._excluded);
    this._disabled = Object.assign(this._disabled, parent._disabled);
  }
  var pattern2 = new Pattern$2(input_scanner);
  this.__patterns = {
    handlebars_comment: pattern2.starting_with(/{{!--/).until_after(/--}}/),
    handlebars_unescaped: pattern2.starting_with(/{{{/).until_after(/}}}/),
    handlebars: pattern2.starting_with(/{{/).until_after(/}}/),
    php: pattern2.starting_with(/<\?(?:[= ]|php)/).until_after(/\?>/),
    erb: pattern2.starting_with(/<%[^%]/).until_after(/[^%]%>/),
    django: pattern2.starting_with(/{%/).until_after(/%}/),
    django_value: pattern2.starting_with(/{{/).until_after(/}}/),
    django_comment: pattern2.starting_with(/{#/).until_after(/#}/),
    smarty: pattern2.starting_with(/{(?=[^}{\s\n])/).until_after(/[^\s\n]}/),
    smarty_comment: pattern2.starting_with(/{\*/).until_after(/\*}/),
    smarty_literal: pattern2.starting_with(/{literal}/).until_after(/{\/literal}/)
  };
}
TemplatablePattern$2.prototype = new Pattern$2();
TemplatablePattern$2.prototype._create = function() {
  return new TemplatablePattern$2(this._input, this);
};
TemplatablePattern$2.prototype._update = function() {
  this.__set_templated_pattern();
};
TemplatablePattern$2.prototype.disable = function(language) {
  var result = this._create();
  result._disabled[language] = true;
  result._update();
  return result;
};
TemplatablePattern$2.prototype.read_options = function(options2) {
  var result = this._create();
  for (var language in template_names) {
    result._disabled[language] = options2.templating.indexOf(language) === -1;
  }
  result._update();
  return result;
};
TemplatablePattern$2.prototype.exclude = function(language) {
  var result = this._create();
  result._excluded[language] = true;
  result._update();
  return result;
};
TemplatablePattern$2.prototype.read = function() {
  var result = "";
  if (this._match_pattern) {
    result = this._input.read(this._starting_pattern);
  } else {
    result = this._input.read(this._starting_pattern, this.__template_pattern);
  }
  var next = this._read_template();
  while (next) {
    if (this._match_pattern) {
      next += this._input.read(this._match_pattern);
    } else {
      next += this._input.readUntil(this.__template_pattern);
    }
    result += next;
    next = this._read_template();
  }
  if (this._until_after) {
    result += this._input.readUntilAfter(this._until_pattern);
  }
  return result;
};
TemplatablePattern$2.prototype.__set_templated_pattern = function() {
  var items = [];
  if (!this._disabled.php) {
    items.push(this.__patterns.php._starting_pattern.source);
  }
  if (!this._disabled.handlebars) {
    items.push(this.__patterns.handlebars._starting_pattern.source);
  }
  if (!this._disabled.erb) {
    items.push(this.__patterns.erb._starting_pattern.source);
  }
  if (!this._disabled.django) {
    items.push(this.__patterns.django._starting_pattern.source);
    items.push(this.__patterns.django_value._starting_pattern.source);
    items.push(this.__patterns.django_comment._starting_pattern.source);
  }
  if (!this._disabled.smarty) {
    items.push(this.__patterns.smarty._starting_pattern.source);
  }
  if (this._until_pattern) {
    items.push(this._until_pattern.source);
  }
  this.__template_pattern = this._input.get_regexp("(?:" + items.join("|") + ")");
};
TemplatablePattern$2.prototype._read_template = function() {
  var resulting_string = "";
  var c = this._input.peek();
  if (c === "<") {
    var peek1 = this._input.peek(1);
    if (!this._disabled.php && !this._excluded.php && peek1 === "?") {
      resulting_string = resulting_string || this.__patterns.php.read();
    }
    if (!this._disabled.erb && !this._excluded.erb && peek1 === "%") {
      resulting_string = resulting_string || this.__patterns.erb.read();
    }
  } else if (c === "{") {
    if (!this._disabled.handlebars && !this._excluded.handlebars) {
      resulting_string = resulting_string || this.__patterns.handlebars_comment.read();
      resulting_string = resulting_string || this.__patterns.handlebars_unescaped.read();
      resulting_string = resulting_string || this.__patterns.handlebars.read();
    }
    if (!this._disabled.django) {
      if (!this._excluded.django && !this._excluded.handlebars) {
        resulting_string = resulting_string || this.__patterns.django_value.read();
      }
      if (!this._excluded.django) {
        resulting_string = resulting_string || this.__patterns.django_comment.read();
        resulting_string = resulting_string || this.__patterns.django.read();
      }
    }
    if (!this._disabled.smarty) {
      if (this._disabled.django && this._disabled.handlebars) {
        resulting_string = resulting_string || this.__patterns.smarty_comment.read();
        resulting_string = resulting_string || this.__patterns.smarty_literal.read();
        resulting_string = resulting_string || this.__patterns.smarty.read();
      }
    }
  }
  return resulting_string;
};
templatablepattern.TemplatablePattern = TemplatablePattern$2;
var InputScanner$1 = inputscanner.InputScanner;
var BaseTokenizer$1 = tokenizer$1.Tokenizer;
var BASETOKEN$1 = tokenizer$1.TOKEN;
var Directives$2 = directives.Directives;
var acorn$1 = acorn$2;
var Pattern$1 = pattern.Pattern;
var TemplatablePattern$1 = templatablepattern.TemplatablePattern;
function in_array$2(what, arr) {
  return arr.indexOf(what) !== -1;
}
var TOKEN$3 = {
  START_EXPR: "TK_START_EXPR",
  END_EXPR: "TK_END_EXPR",
  START_BLOCK: "TK_START_BLOCK",
  END_BLOCK: "TK_END_BLOCK",
  WORD: "TK_WORD",
  RESERVED: "TK_RESERVED",
  SEMICOLON: "TK_SEMICOLON",
  STRING: "TK_STRING",
  EQUALS: "TK_EQUALS",
  OPERATOR: "TK_OPERATOR",
  COMMA: "TK_COMMA",
  BLOCK_COMMENT: "TK_BLOCK_COMMENT",
  COMMENT: "TK_COMMENT",
  DOT: "TK_DOT",
  UNKNOWN: "TK_UNKNOWN",
  START: BASETOKEN$1.START,
  RAW: BASETOKEN$1.RAW,
  EOF: BASETOKEN$1.EOF
};
var directives_core$2 = new Directives$2(/\/\*/, /\*\//);
var number_pattern = /0[xX][0123456789abcdefABCDEF_]*n?|0[oO][01234567_]*n?|0[bB][01_]*n?|\d[\d_]*n|(?:\.\d[\d_]*|\d[\d_]*\.?[\d_]*)(?:[eE][+-]?[\d_]+)?/;
var digit = /[0-9]/;
var dot_pattern = /[^\d\.]/;
var positionable_operators$1 = ">>> === !== &&= ??= ||= << && >= ** != == <= >> || ?? |> < / - + > : & % ? ^ | *".split(" ");
var punct = ">>>= ... >>= <<= === >>> !== **= &&= ??= ||= => ^= :: /= << <= == && -= >= >> != -- += ** || ?? ++ %= &= *= |= |> = ! ? > < : / ^ - + * & % ~ |";
punct = punct.replace(/[-[\]{}()*+?.,\\^$|#]/g, "\\$&");
punct = "\\?\\.(?!\\d) " + punct;
punct = punct.replace(/ /g, "|");
var punct_pattern = new RegExp(punct);
var line_starters$1 = "continue,try,throw,return,var,let,const,if,switch,case,default,for,while,break,function,import,export".split(",");
var reserved_words = line_starters$1.concat(["do", "in", "of", "else", "get", "set", "new", "catch", "finally", "typeof", "yield", "async", "await", "from", "as", "class", "extends"]);
var reserved_word_pattern = new RegExp("^(?:" + reserved_words.join("|") + ")$");
var in_html_comment;
var Tokenizer$4 = function(input_string, options2) {
  BaseTokenizer$1.call(this, input_string, options2);
  this._patterns.whitespace = this._patterns.whitespace.matching(/\u00A0\u1680\u180e\u2000-\u200a\u202f\u205f\u3000\ufeff/.source, /\u2028\u2029/.source);
  var pattern_reader = new Pattern$1(this._input);
  var templatable = new TemplatablePattern$1(this._input).read_options(this._options);
  this.__patterns = {
    template: templatable,
    identifier: templatable.starting_with(acorn$1.identifier).matching(acorn$1.identifierMatch),
    number: pattern_reader.matching(number_pattern),
    punct: pattern_reader.matching(punct_pattern),
    comment: pattern_reader.starting_with(/\/\//).until(/[\n\r\u2028\u2029]/),
    block_comment: pattern_reader.starting_with(/\/\*/).until_after(/\*\//),
    html_comment_start: pattern_reader.matching(/<!--/),
    html_comment_end: pattern_reader.matching(/-->/),
    include: pattern_reader.starting_with(/#include/).until_after(acorn$1.lineBreak),
    shebang: pattern_reader.starting_with(/#!/).until_after(acorn$1.lineBreak),
    xml: pattern_reader.matching(/[\s\S]*?<(\/?)([-a-zA-Z:0-9_.]+|{[^}]+?}|!\[CDATA\[[^\]]*?\]\]|)(\s*{[^}]+?}|\s+[-a-zA-Z:0-9_.]+|\s+[-a-zA-Z:0-9_.]+\s*=\s*('[^']*'|"[^"]*"|{([^{}]|{[^}]+?})+?}))*\s*(\/?)\s*>/),
    single_quote: templatable.until(/['\\\n\r\u2028\u2029]/),
    double_quote: templatable.until(/["\\\n\r\u2028\u2029]/),
    template_text: templatable.until(/[`\\$]/),
    template_expression: templatable.until(/[`}\\]/)
  };
};
Tokenizer$4.prototype = new BaseTokenizer$1();
Tokenizer$4.prototype._is_comment = function(current_token) {
  return current_token.type === TOKEN$3.COMMENT || current_token.type === TOKEN$3.BLOCK_COMMENT || current_token.type === TOKEN$3.UNKNOWN;
};
Tokenizer$4.prototype._is_opening = function(current_token) {
  return current_token.type === TOKEN$3.START_BLOCK || current_token.type === TOKEN$3.START_EXPR;
};
Tokenizer$4.prototype._is_closing = function(current_token, open_token) {
  return (current_token.type === TOKEN$3.END_BLOCK || current_token.type === TOKEN$3.END_EXPR) && (open_token && (current_token.text === "]" && open_token.text === "[" || current_token.text === ")" && open_token.text === "(" || current_token.text === "}" && open_token.text === "{"));
};
Tokenizer$4.prototype._reset = function() {
  in_html_comment = false;
};
Tokenizer$4.prototype._get_next_token = function(previous_token, open_token) {
  var token2 = null;
  this._readWhitespace();
  var c = this._input.peek();
  if (c === null) {
    return this._create_token(TOKEN$3.EOF, "");
  }
  token2 = token2 || this._read_non_javascript(c);
  token2 = token2 || this._read_string(c);
  token2 = token2 || this._read_word(previous_token);
  token2 = token2 || this._read_singles(c);
  token2 = token2 || this._read_comment(c);
  token2 = token2 || this._read_regexp(c, previous_token);
  token2 = token2 || this._read_xml(c, previous_token);
  token2 = token2 || this._read_punctuation();
  token2 = token2 || this._create_token(TOKEN$3.UNKNOWN, this._input.next());
  return token2;
};
Tokenizer$4.prototype._read_word = function(previous_token) {
  var resulting_string;
  resulting_string = this.__patterns.identifier.read();
  if (resulting_string !== "") {
    resulting_string = resulting_string.replace(acorn$1.allLineBreaks, "\n");
    if (!(previous_token.type === TOKEN$3.DOT || previous_token.type === TOKEN$3.RESERVED && (previous_token.text === "set" || previous_token.text === "get")) && reserved_word_pattern.test(resulting_string)) {
      if ((resulting_string === "in" || resulting_string === "of") && (previous_token.type === TOKEN$3.WORD || previous_token.type === TOKEN$3.STRING)) {
        return this._create_token(TOKEN$3.OPERATOR, resulting_string);
      }
      return this._create_token(TOKEN$3.RESERVED, resulting_string);
    }
    return this._create_token(TOKEN$3.WORD, resulting_string);
  }
  resulting_string = this.__patterns.number.read();
  if (resulting_string !== "") {
    return this._create_token(TOKEN$3.WORD, resulting_string);
  }
};
Tokenizer$4.prototype._read_singles = function(c) {
  var token2 = null;
  if (c === "(" || c === "[") {
    token2 = this._create_token(TOKEN$3.START_EXPR, c);
  } else if (c === ")" || c === "]") {
    token2 = this._create_token(TOKEN$3.END_EXPR, c);
  } else if (c === "{") {
    token2 = this._create_token(TOKEN$3.START_BLOCK, c);
  } else if (c === "}") {
    token2 = this._create_token(TOKEN$3.END_BLOCK, c);
  } else if (c === ";") {
    token2 = this._create_token(TOKEN$3.SEMICOLON, c);
  } else if (c === "." && dot_pattern.test(this._input.peek(1))) {
    token2 = this._create_token(TOKEN$3.DOT, c);
  } else if (c === ",") {
    token2 = this._create_token(TOKEN$3.COMMA, c);
  }
  if (token2) {
    this._input.next();
  }
  return token2;
};
Tokenizer$4.prototype._read_punctuation = function() {
  var resulting_string = this.__patterns.punct.read();
  if (resulting_string !== "") {
    if (resulting_string === "=") {
      return this._create_token(TOKEN$3.EQUALS, resulting_string);
    } else if (resulting_string === "?.") {
      return this._create_token(TOKEN$3.DOT, resulting_string);
    } else {
      return this._create_token(TOKEN$3.OPERATOR, resulting_string);
    }
  }
};
Tokenizer$4.prototype._read_non_javascript = function(c) {
  var resulting_string = "";
  if (c === "#") {
    if (this._is_first_token()) {
      resulting_string = this.__patterns.shebang.read();
      if (resulting_string) {
        return this._create_token(TOKEN$3.UNKNOWN, resulting_string.trim() + "\n");
      }
    }
    resulting_string = this.__patterns.include.read();
    if (resulting_string) {
      return this._create_token(TOKEN$3.UNKNOWN, resulting_string.trim() + "\n");
    }
    c = this._input.next();
    var sharp = "#";
    if (this._input.hasNext() && this._input.testChar(digit)) {
      do {
        c = this._input.next();
        sharp += c;
      } while (this._input.hasNext() && c !== "#" && c !== "=");
      if (c === "#")
        ;
      else if (this._input.peek() === "[" && this._input.peek(1) === "]") {
        sharp += "[]";
        this._input.next();
        this._input.next();
      } else if (this._input.peek() === "{" && this._input.peek(1) === "}") {
        sharp += "{}";
        this._input.next();
        this._input.next();
      }
      return this._create_token(TOKEN$3.WORD, sharp);
    }
    this._input.back();
  } else if (c === "<" && this._is_first_token()) {
    resulting_string = this.__patterns.html_comment_start.read();
    if (resulting_string) {
      while (this._input.hasNext() && !this._input.testChar(acorn$1.newline)) {
        resulting_string += this._input.next();
      }
      in_html_comment = true;
      return this._create_token(TOKEN$3.COMMENT, resulting_string);
    }
  } else if (in_html_comment && c === "-") {
    resulting_string = this.__patterns.html_comment_end.read();
    if (resulting_string) {
      in_html_comment = false;
      return this._create_token(TOKEN$3.COMMENT, resulting_string);
    }
  }
  return null;
};
Tokenizer$4.prototype._read_comment = function(c) {
  var token2 = null;
  if (c === "/") {
    var comment2 = "";
    if (this._input.peek(1) === "*") {
      comment2 = this.__patterns.block_comment.read();
      var directives2 = directives_core$2.get_directives(comment2);
      if (directives2 && directives2.ignore === "start") {
        comment2 += directives_core$2.readIgnored(this._input);
      }
      comment2 = comment2.replace(acorn$1.allLineBreaks, "\n");
      token2 = this._create_token(TOKEN$3.BLOCK_COMMENT, comment2);
      token2.directives = directives2;
    } else if (this._input.peek(1) === "/") {
      comment2 = this.__patterns.comment.read();
      token2 = this._create_token(TOKEN$3.COMMENT, comment2);
    }
  }
  return token2;
};
Tokenizer$4.prototype._read_string = function(c) {
  if (c === "`" || c === "'" || c === '"') {
    var resulting_string = this._input.next();
    this.has_char_escapes = false;
    if (c === "`") {
      resulting_string += this._read_string_recursive("`", true, "${");
    } else {
      resulting_string += this._read_string_recursive(c);
    }
    if (this.has_char_escapes && this._options.unescape_strings) {
      resulting_string = unescape_string(resulting_string);
    }
    if (this._input.peek() === c) {
      resulting_string += this._input.next();
    }
    resulting_string = resulting_string.replace(acorn$1.allLineBreaks, "\n");
    return this._create_token(TOKEN$3.STRING, resulting_string);
  }
  return null;
};
Tokenizer$4.prototype._allow_regexp_or_xml = function(previous_token) {
  return previous_token.type === TOKEN$3.RESERVED && in_array$2(previous_token.text, ["return", "case", "throw", "else", "do", "typeof", "yield"]) || previous_token.type === TOKEN$3.END_EXPR && previous_token.text === ")" && previous_token.opened.previous.type === TOKEN$3.RESERVED && in_array$2(previous_token.opened.previous.text, ["if", "while", "for"]) || in_array$2(previous_token.type, [
    TOKEN$3.COMMENT,
    TOKEN$3.START_EXPR,
    TOKEN$3.START_BLOCK,
    TOKEN$3.START,
    TOKEN$3.END_BLOCK,
    TOKEN$3.OPERATOR,
    TOKEN$3.EQUALS,
    TOKEN$3.EOF,
    TOKEN$3.SEMICOLON,
    TOKEN$3.COMMA
  ]);
};
Tokenizer$4.prototype._read_regexp = function(c, previous_token) {
  if (c === "/" && this._allow_regexp_or_xml(previous_token)) {
    var resulting_string = this._input.next();
    var esc = false;
    var in_char_class = false;
    while (this._input.hasNext() && ((esc || in_char_class || this._input.peek() !== c) && !this._input.testChar(acorn$1.newline))) {
      resulting_string += this._input.peek();
      if (!esc) {
        esc = this._input.peek() === "\\";
        if (this._input.peek() === "[") {
          in_char_class = true;
        } else if (this._input.peek() === "]") {
          in_char_class = false;
        }
      } else {
        esc = false;
      }
      this._input.next();
    }
    if (this._input.peek() === c) {
      resulting_string += this._input.next();
      resulting_string += this._input.read(acorn$1.identifier);
    }
    return this._create_token(TOKEN$3.STRING, resulting_string);
  }
  return null;
};
Tokenizer$4.prototype._read_xml = function(c, previous_token) {
  if (this._options.e4x && c === "<" && this._allow_regexp_or_xml(previous_token)) {
    var xmlStr = "";
    var match = this.__patterns.xml.read_match();
    if (match) {
      var rootTag = match[2].replace(/^{\s+/, "{").replace(/\s+}$/, "}");
      var isCurlyRoot = rootTag.indexOf("{") === 0;
      var depth = 0;
      while (match) {
        var isEndTag = !!match[1];
        var tagName = match[2];
        var isSingletonTag = !!match[match.length - 1] || tagName.slice(0, 8) === "![CDATA[";
        if (!isSingletonTag && (tagName === rootTag || isCurlyRoot && tagName.replace(/^{\s+/, "{").replace(/\s+}$/, "}"))) {
          if (isEndTag) {
            --depth;
          } else {
            ++depth;
          }
        }
        xmlStr += match[0];
        if (depth <= 0) {
          break;
        }
        match = this.__patterns.xml.read_match();
      }
      if (!match) {
        xmlStr += this._input.match(/[\s\S]*/g)[0];
      }
      xmlStr = xmlStr.replace(acorn$1.allLineBreaks, "\n");
      return this._create_token(TOKEN$3.STRING, xmlStr);
    }
  }
  return null;
};
function unescape_string(s) {
  var out = "", escaped = 0;
  var input_scan = new InputScanner$1(s);
  var matched = null;
  while (input_scan.hasNext()) {
    matched = input_scan.match(/([\s]|[^\\]|\\\\)+/g);
    if (matched) {
      out += matched[0];
    }
    if (input_scan.peek() === "\\") {
      input_scan.next();
      if (input_scan.peek() === "x") {
        matched = input_scan.match(/x([0-9A-Fa-f]{2})/g);
      } else if (input_scan.peek() === "u") {
        matched = input_scan.match(/u([0-9A-Fa-f]{4})/g);
      } else {
        out += "\\";
        if (input_scan.hasNext()) {
          out += input_scan.next();
        }
        continue;
      }
      if (!matched) {
        return s;
      }
      escaped = parseInt(matched[1], 16);
      if (escaped > 126 && escaped <= 255 && matched[0].indexOf("x") === 0) {
        return s;
      } else if (escaped >= 0 && escaped < 32) {
        out += "\\" + matched[0];
        continue;
      } else if (escaped === 34 || escaped === 39 || escaped === 92) {
        out += "\\" + String.fromCharCode(escaped);
      } else {
        out += String.fromCharCode(escaped);
      }
    }
  }
  return out;
}
Tokenizer$4.prototype._read_string_recursive = function(delimiter, allow_unescaped_newlines, start_sub) {
  var current_char;
  var pattern2;
  if (delimiter === "'") {
    pattern2 = this.__patterns.single_quote;
  } else if (delimiter === '"') {
    pattern2 = this.__patterns.double_quote;
  } else if (delimiter === "`") {
    pattern2 = this.__patterns.template_text;
  } else if (delimiter === "}") {
    pattern2 = this.__patterns.template_expression;
  }
  var resulting_string = pattern2.read();
  var next = "";
  while (this._input.hasNext()) {
    next = this._input.next();
    if (next === delimiter || !allow_unescaped_newlines && acorn$1.newline.test(next)) {
      this._input.back();
      break;
    } else if (next === "\\" && this._input.hasNext()) {
      current_char = this._input.peek();
      if (current_char === "x" || current_char === "u") {
        this.has_char_escapes = true;
      } else if (current_char === "\r" && this._input.peek(1) === "\n") {
        this._input.next();
      }
      next += this._input.next();
    } else if (start_sub) {
      if (start_sub === "${" && next === "$" && this._input.peek() === "{") {
        next += this._input.next();
      }
      if (start_sub === next) {
        if (delimiter === "`") {
          next += this._read_string_recursive("}", allow_unescaped_newlines, "`");
        } else {
          next += this._read_string_recursive("`", allow_unescaped_newlines, "${");
        }
        if (this._input.hasNext()) {
          next += this._input.next();
        }
      }
    }
    next += pattern2.read();
    resulting_string += next;
  }
  return resulting_string;
};
tokenizer$2.Tokenizer = Tokenizer$4;
tokenizer$2.TOKEN = TOKEN$3;
tokenizer$2.positionable_operators = positionable_operators$1.slice();
tokenizer$2.line_starters = line_starters$1.slice();
var Output$3 = output.Output;
var Token$1 = token.Token;
var acorn = acorn$2;
var Options$7 = options$3.Options;
var Tokenizer$3 = tokenizer$2.Tokenizer;
var line_starters = tokenizer$2.line_starters;
var positionable_operators = tokenizer$2.positionable_operators;
var TOKEN$2 = tokenizer$2.TOKEN;
function in_array$1(what, arr) {
  return arr.indexOf(what) !== -1;
}
function ltrim(s) {
  return s.replace(/^\s+/g, "");
}
function generateMapFromStrings(list) {
  var result = {};
  for (var x = 0; x < list.length; x++) {
    result[list[x].replace(/-/g, "_")] = list[x];
  }
  return result;
}
function reserved_word(token2, word) {
  return token2 && token2.type === TOKEN$2.RESERVED && token2.text === word;
}
function reserved_array(token2, words) {
  return token2 && token2.type === TOKEN$2.RESERVED && in_array$1(token2.text, words);
}
var special_words = ["case", "return", "do", "if", "throw", "else", "await", "break", "continue", "async"];
var validPositionValues = ["before-newline", "after-newline", "preserve-newline"];
var OPERATOR_POSITION = generateMapFromStrings(validPositionValues);
var OPERATOR_POSITION_BEFORE_OR_PRESERVE = [OPERATOR_POSITION.before_newline, OPERATOR_POSITION.preserve_newline];
var MODE = {
  BlockStatement: "BlockStatement",
  Statement: "Statement",
  ObjectLiteral: "ObjectLiteral",
  ArrayLiteral: "ArrayLiteral",
  ForInitializer: "ForInitializer",
  Conditional: "Conditional",
  Expression: "Expression"
};
function remove_redundant_indentation(output2, frame) {
  if (frame.multiline_frame || frame.mode === MODE.ForInitializer || frame.mode === MODE.Conditional) {
    return;
  }
  output2.remove_indent(frame.start_line_index);
}
function split_linebreaks(s) {
  s = s.replace(acorn.allLineBreaks, "\n");
  var out = [], idx = s.indexOf("\n");
  while (idx !== -1) {
    out.push(s.substring(0, idx));
    s = s.substring(idx + 1);
    idx = s.indexOf("\n");
  }
  if (s.length) {
    out.push(s);
  }
  return out;
}
function is_array(mode) {
  return mode === MODE.ArrayLiteral;
}
function is_expression(mode) {
  return in_array$1(mode, [MODE.Expression, MODE.ForInitializer, MODE.Conditional]);
}
function all_lines_start_with(lines, c) {
  for (var i = 0; i < lines.length; i++) {
    var line = lines[i].trim();
    if (line.charAt(0) !== c) {
      return false;
    }
  }
  return true;
}
function each_line_matches_indent(lines, indent) {
  var i = 0, len = lines.length, line;
  for (; i < len; i++) {
    line = lines[i];
    if (line && line.indexOf(indent) !== 0) {
      return false;
    }
  }
  return true;
}
function Beautifier$5(source_text, options2) {
  options2 = options2 || {};
  this._source_text = source_text || "";
  this._output = null;
  this._tokens = null;
  this._last_last_text = null;
  this._flags = null;
  this._previous_flags = null;
  this._flag_store = null;
  this._options = new Options$7(options2);
}
Beautifier$5.prototype.create_flags = function(flags_base, mode) {
  var next_indent_level = 0;
  if (flags_base) {
    next_indent_level = flags_base.indentation_level;
    if (!this._output.just_added_newline() && flags_base.line_indent_level > next_indent_level) {
      next_indent_level = flags_base.line_indent_level;
    }
  }
  var next_flags = {
    mode,
    parent: flags_base,
    last_token: flags_base ? flags_base.last_token : new Token$1(TOKEN$2.START_BLOCK, ""),
    last_word: flags_base ? flags_base.last_word : "",
    declaration_statement: false,
    declaration_assignment: false,
    multiline_frame: false,
    inline_frame: false,
    if_block: false,
    else_block: false,
    class_start_block: false,
    do_block: false,
    do_while: false,
    import_block: false,
    in_case_statement: false,
    in_case: false,
    case_body: false,
    case_block: false,
    indentation_level: next_indent_level,
    alignment: 0,
    line_indent_level: flags_base ? flags_base.line_indent_level : next_indent_level,
    start_line_index: this._output.get_line_number(),
    ternary_depth: 0
  };
  return next_flags;
};
Beautifier$5.prototype._reset = function(source_text) {
  var baseIndentString = source_text.match(/^[\t ]*/)[0];
  this._last_last_text = "";
  this._output = new Output$3(this._options, baseIndentString);
  this._output.raw = this._options.test_output_raw;
  this._flag_store = [];
  this.set_mode(MODE.BlockStatement);
  var tokenizer2 = new Tokenizer$3(source_text, this._options);
  this._tokens = tokenizer2.tokenize();
  return source_text;
};
Beautifier$5.prototype.beautify = function() {
  if (this._options.disabled) {
    return this._source_text;
  }
  var sweet_code;
  var source_text = this._reset(this._source_text);
  var eol = this._options.eol;
  if (this._options.eol === "auto") {
    eol = "\n";
    if (source_text && acorn.lineBreak.test(source_text || "")) {
      eol = source_text.match(acorn.lineBreak)[0];
    }
  }
  var current_token = this._tokens.next();
  while (current_token) {
    this.handle_token(current_token);
    this._last_last_text = this._flags.last_token.text;
    this._flags.last_token = current_token;
    current_token = this._tokens.next();
  }
  sweet_code = this._output.get_code(eol);
  return sweet_code;
};
Beautifier$5.prototype.handle_token = function(current_token, preserve_statement_flags) {
  if (current_token.type === TOKEN$2.START_EXPR) {
    this.handle_start_expr(current_token);
  } else if (current_token.type === TOKEN$2.END_EXPR) {
    this.handle_end_expr(current_token);
  } else if (current_token.type === TOKEN$2.START_BLOCK) {
    this.handle_start_block(current_token);
  } else if (current_token.type === TOKEN$2.END_BLOCK) {
    this.handle_end_block(current_token);
  } else if (current_token.type === TOKEN$2.WORD) {
    this.handle_word(current_token);
  } else if (current_token.type === TOKEN$2.RESERVED) {
    this.handle_word(current_token);
  } else if (current_token.type === TOKEN$2.SEMICOLON) {
    this.handle_semicolon(current_token);
  } else if (current_token.type === TOKEN$2.STRING) {
    this.handle_string(current_token);
  } else if (current_token.type === TOKEN$2.EQUALS) {
    this.handle_equals(current_token);
  } else if (current_token.type === TOKEN$2.OPERATOR) {
    this.handle_operator(current_token);
  } else if (current_token.type === TOKEN$2.COMMA) {
    this.handle_comma(current_token);
  } else if (current_token.type === TOKEN$2.BLOCK_COMMENT) {
    this.handle_block_comment(current_token, preserve_statement_flags);
  } else if (current_token.type === TOKEN$2.COMMENT) {
    this.handle_comment(current_token, preserve_statement_flags);
  } else if (current_token.type === TOKEN$2.DOT) {
    this.handle_dot(current_token);
  } else if (current_token.type === TOKEN$2.EOF) {
    this.handle_eof(current_token);
  } else if (current_token.type === TOKEN$2.UNKNOWN) {
    this.handle_unknown(current_token, preserve_statement_flags);
  } else {
    this.handle_unknown(current_token, preserve_statement_flags);
  }
};
Beautifier$5.prototype.handle_whitespace_and_comments = function(current_token, preserve_statement_flags) {
  var newlines = current_token.newlines;
  var keep_whitespace = this._options.keep_array_indentation && is_array(this._flags.mode);
  if (current_token.comments_before) {
    var comment_token = current_token.comments_before.next();
    while (comment_token) {
      this.handle_whitespace_and_comments(comment_token, preserve_statement_flags);
      this.handle_token(comment_token, preserve_statement_flags);
      comment_token = current_token.comments_before.next();
    }
  }
  if (keep_whitespace) {
    for (var i = 0; i < newlines; i += 1) {
      this.print_newline(i > 0, preserve_statement_flags);
    }
  } else {
    if (this._options.max_preserve_newlines && newlines > this._options.max_preserve_newlines) {
      newlines = this._options.max_preserve_newlines;
    }
    if (this._options.preserve_newlines) {
      if (newlines > 1) {
        this.print_newline(false, preserve_statement_flags);
        for (var j = 1; j < newlines; j += 1) {
          this.print_newline(true, preserve_statement_flags);
        }
      }
    }
  }
};
var newline_restricted_tokens = ["async", "break", "continue", "return", "throw", "yield"];
Beautifier$5.prototype.allow_wrap_or_preserved_newline = function(current_token, force_linewrap) {
  force_linewrap = force_linewrap === void 0 ? false : force_linewrap;
  if (this._output.just_added_newline()) {
    return;
  }
  var shouldPreserveOrForce = this._options.preserve_newlines && current_token.newlines || force_linewrap;
  var operatorLogicApplies = in_array$1(this._flags.last_token.text, positionable_operators) || in_array$1(current_token.text, positionable_operators);
  if (operatorLogicApplies) {
    var shouldPrintOperatorNewline = in_array$1(this._flags.last_token.text, positionable_operators) && in_array$1(this._options.operator_position, OPERATOR_POSITION_BEFORE_OR_PRESERVE) || in_array$1(current_token.text, positionable_operators);
    shouldPreserveOrForce = shouldPreserveOrForce && shouldPrintOperatorNewline;
  }
  if (shouldPreserveOrForce) {
    this.print_newline(false, true);
  } else if (this._options.wrap_line_length) {
    if (reserved_array(this._flags.last_token, newline_restricted_tokens)) {
      return;
    }
    this._output.set_wrap_point();
  }
};
Beautifier$5.prototype.print_newline = function(force_newline, preserve_statement_flags) {
  if (!preserve_statement_flags) {
    if (this._flags.last_token.text !== ";" && this._flags.last_token.text !== "," && this._flags.last_token.text !== "=" && (this._flags.last_token.type !== TOKEN$2.OPERATOR || this._flags.last_token.text === "--" || this._flags.last_token.text === "++")) {
      var next_token = this._tokens.peek();
      while (this._flags.mode === MODE.Statement && !(this._flags.if_block && reserved_word(next_token, "else")) && !this._flags.do_block) {
        this.restore_mode();
      }
    }
  }
  if (this._output.add_new_line(force_newline)) {
    this._flags.multiline_frame = true;
  }
};
Beautifier$5.prototype.print_token_line_indentation = function(current_token) {
  if (this._output.just_added_newline()) {
    if (this._options.keep_array_indentation && current_token.newlines && (current_token.text === "[" || is_array(this._flags.mode))) {
      this._output.current_line.set_indent(-1);
      this._output.current_line.push(current_token.whitespace_before);
      this._output.space_before_token = false;
    } else if (this._output.set_indent(this._flags.indentation_level, this._flags.alignment)) {
      this._flags.line_indent_level = this._flags.indentation_level;
    }
  }
};
Beautifier$5.prototype.print_token = function(current_token) {
  if (this._output.raw) {
    this._output.add_raw_token(current_token);
    return;
  }
  if (this._options.comma_first && current_token.previous && current_token.previous.type === TOKEN$2.COMMA && this._output.just_added_newline()) {
    if (this._output.previous_line.last() === ",") {
      var popped = this._output.previous_line.pop();
      if (this._output.previous_line.is_empty()) {
        this._output.previous_line.push(popped);
        this._output.trim(true);
        this._output.current_line.pop();
        this._output.trim();
      }
      this.print_token_line_indentation(current_token);
      this._output.add_token(",");
      this._output.space_before_token = true;
    }
  }
  this.print_token_line_indentation(current_token);
  this._output.non_breaking_space = true;
  this._output.add_token(current_token.text);
  if (this._output.previous_token_wrapped) {
    this._flags.multiline_frame = true;
  }
};
Beautifier$5.prototype.indent = function() {
  this._flags.indentation_level += 1;
  this._output.set_indent(this._flags.indentation_level, this._flags.alignment);
};
Beautifier$5.prototype.deindent = function() {
  if (this._flags.indentation_level > 0 && (!this._flags.parent || this._flags.indentation_level > this._flags.parent.indentation_level)) {
    this._flags.indentation_level -= 1;
    this._output.set_indent(this._flags.indentation_level, this._flags.alignment);
  }
};
Beautifier$5.prototype.set_mode = function(mode) {
  if (this._flags) {
    this._flag_store.push(this._flags);
    this._previous_flags = this._flags;
  } else {
    this._previous_flags = this.create_flags(null, mode);
  }
  this._flags = this.create_flags(this._previous_flags, mode);
  this._output.set_indent(this._flags.indentation_level, this._flags.alignment);
};
Beautifier$5.prototype.restore_mode = function() {
  if (this._flag_store.length > 0) {
    this._previous_flags = this._flags;
    this._flags = this._flag_store.pop();
    if (this._previous_flags.mode === MODE.Statement) {
      remove_redundant_indentation(this._output, this._previous_flags);
    }
    this._output.set_indent(this._flags.indentation_level, this._flags.alignment);
  }
};
Beautifier$5.prototype.start_of_object_property = function() {
  return this._flags.parent.mode === MODE.ObjectLiteral && this._flags.mode === MODE.Statement && (this._flags.last_token.text === ":" && this._flags.ternary_depth === 0 || reserved_array(this._flags.last_token, ["get", "set"]));
};
Beautifier$5.prototype.start_of_statement = function(current_token) {
  var start = false;
  start = start || reserved_array(this._flags.last_token, ["var", "let", "const"]) && current_token.type === TOKEN$2.WORD;
  start = start || reserved_word(this._flags.last_token, "do");
  start = start || !(this._flags.parent.mode === MODE.ObjectLiteral && this._flags.mode === MODE.Statement) && reserved_array(this._flags.last_token, newline_restricted_tokens) && !current_token.newlines;
  start = start || reserved_word(this._flags.last_token, "else") && !(reserved_word(current_token, "if") && !current_token.comments_before);
  start = start || this._flags.last_token.type === TOKEN$2.END_EXPR && (this._previous_flags.mode === MODE.ForInitializer || this._previous_flags.mode === MODE.Conditional);
  start = start || this._flags.last_token.type === TOKEN$2.WORD && this._flags.mode === MODE.BlockStatement && !this._flags.in_case && !(current_token.text === "--" || current_token.text === "++") && this._last_last_text !== "function" && current_token.type !== TOKEN$2.WORD && current_token.type !== TOKEN$2.RESERVED;
  start = start || this._flags.mode === MODE.ObjectLiteral && (this._flags.last_token.text === ":" && this._flags.ternary_depth === 0 || reserved_array(this._flags.last_token, ["get", "set"]));
  if (start) {
    this.set_mode(MODE.Statement);
    this.indent();
    this.handle_whitespace_and_comments(current_token, true);
    if (!this.start_of_object_property()) {
      this.allow_wrap_or_preserved_newline(current_token, reserved_array(current_token, ["do", "for", "if", "while"]));
    }
    return true;
  }
  return false;
};
Beautifier$5.prototype.handle_start_expr = function(current_token) {
  if (!this.start_of_statement(current_token)) {
    this.handle_whitespace_and_comments(current_token);
  }
  var next_mode = MODE.Expression;
  if (current_token.text === "[") {
    if (this._flags.last_token.type === TOKEN$2.WORD || this._flags.last_token.text === ")") {
      if (reserved_array(this._flags.last_token, line_starters)) {
        this._output.space_before_token = true;
      }
      this.print_token(current_token);
      this.set_mode(next_mode);
      this.indent();
      if (this._options.space_in_paren) {
        this._output.space_before_token = true;
      }
      return;
    }
    next_mode = MODE.ArrayLiteral;
    if (is_array(this._flags.mode)) {
      if (this._flags.last_token.text === "[" || this._flags.last_token.text === "," && (this._last_last_text === "]" || this._last_last_text === "}")) {
        if (!this._options.keep_array_indentation) {
          this.print_newline();
        }
      }
    }
    if (!in_array$1(this._flags.last_token.type, [TOKEN$2.START_EXPR, TOKEN$2.END_EXPR, TOKEN$2.WORD, TOKEN$2.OPERATOR, TOKEN$2.DOT])) {
      this._output.space_before_token = true;
    }
  } else {
    if (this._flags.last_token.type === TOKEN$2.RESERVED) {
      if (this._flags.last_token.text === "for") {
        this._output.space_before_token = this._options.space_before_conditional;
        next_mode = MODE.ForInitializer;
      } else if (in_array$1(this._flags.last_token.text, ["if", "while", "switch"])) {
        this._output.space_before_token = this._options.space_before_conditional;
        next_mode = MODE.Conditional;
      } else if (in_array$1(this._flags.last_word, ["await", "async"])) {
        this._output.space_before_token = true;
      } else if (this._flags.last_token.text === "import" && current_token.whitespace_before === "") {
        this._output.space_before_token = false;
      } else if (in_array$1(this._flags.last_token.text, line_starters) || this._flags.last_token.text === "catch") {
        this._output.space_before_token = true;
      }
    } else if (this._flags.last_token.type === TOKEN$2.EQUALS || this._flags.last_token.type === TOKEN$2.OPERATOR) {
      if (!this.start_of_object_property()) {
        this.allow_wrap_or_preserved_newline(current_token);
      }
    } else if (this._flags.last_token.type === TOKEN$2.WORD) {
      this._output.space_before_token = false;
      var peek_back_two = this._tokens.peek(-3);
      if (this._options.space_after_named_function && peek_back_two) {
        var peek_back_three = this._tokens.peek(-4);
        if (reserved_array(peek_back_two, ["async", "function"]) || peek_back_two.text === "*" && reserved_array(peek_back_three, ["async", "function"])) {
          this._output.space_before_token = true;
        } else if (this._flags.mode === MODE.ObjectLiteral) {
          if (peek_back_two.text === "{" || peek_back_two.text === "," || peek_back_two.text === "*" && (peek_back_three.text === "{" || peek_back_three.text === ",")) {
            this._output.space_before_token = true;
          }
        } else if (this._flags.parent && this._flags.parent.class_start_block) {
          this._output.space_before_token = true;
        }
      }
    } else {
      this.allow_wrap_or_preserved_newline(current_token);
    }
    if (this._flags.last_token.type === TOKEN$2.RESERVED && (this._flags.last_word === "function" || this._flags.last_word === "typeof") || this._flags.last_token.text === "*" && (in_array$1(this._last_last_text, ["function", "yield"]) || this._flags.mode === MODE.ObjectLiteral && in_array$1(this._last_last_text, ["{", ","]))) {
      this._output.space_before_token = this._options.space_after_anon_function;
    }
  }
  if (this._flags.last_token.text === ";" || this._flags.last_token.type === TOKEN$2.START_BLOCK) {
    this.print_newline();
  } else if (this._flags.last_token.type === TOKEN$2.END_EXPR || this._flags.last_token.type === TOKEN$2.START_EXPR || this._flags.last_token.type === TOKEN$2.END_BLOCK || this._flags.last_token.text === "." || this._flags.last_token.type === TOKEN$2.COMMA) {
    this.allow_wrap_or_preserved_newline(current_token, current_token.newlines);
  }
  this.print_token(current_token);
  this.set_mode(next_mode);
  if (this._options.space_in_paren) {
    this._output.space_before_token = true;
  }
  this.indent();
};
Beautifier$5.prototype.handle_end_expr = function(current_token) {
  while (this._flags.mode === MODE.Statement) {
    this.restore_mode();
  }
  this.handle_whitespace_and_comments(current_token);
  if (this._flags.multiline_frame) {
    this.allow_wrap_or_preserved_newline(current_token, current_token.text === "]" && is_array(this._flags.mode) && !this._options.keep_array_indentation);
  }
  if (this._options.space_in_paren) {
    if (this._flags.last_token.type === TOKEN$2.START_EXPR && !this._options.space_in_empty_paren) {
      this._output.trim();
      this._output.space_before_token = false;
    } else {
      this._output.space_before_token = true;
    }
  }
  this.deindent();
  this.print_token(current_token);
  this.restore_mode();
  remove_redundant_indentation(this._output, this._previous_flags);
  if (this._flags.do_while && this._previous_flags.mode === MODE.Conditional) {
    this._previous_flags.mode = MODE.Expression;
    this._flags.do_block = false;
    this._flags.do_while = false;
  }
};
Beautifier$5.prototype.handle_start_block = function(current_token) {
  this.handle_whitespace_and_comments(current_token);
  var next_token = this._tokens.peek();
  var second_token = this._tokens.peek(1);
  if (this._flags.last_word === "switch" && this._flags.last_token.type === TOKEN$2.END_EXPR) {
    this.set_mode(MODE.BlockStatement);
    this._flags.in_case_statement = true;
  } else if (this._flags.case_body) {
    this.set_mode(MODE.BlockStatement);
  } else if (second_token && (in_array$1(second_token.text, [":", ","]) && in_array$1(next_token.type, [TOKEN$2.STRING, TOKEN$2.WORD, TOKEN$2.RESERVED]) || in_array$1(next_token.text, ["get", "set", "..."]) && in_array$1(second_token.type, [TOKEN$2.WORD, TOKEN$2.RESERVED]))) {
    if (in_array$1(this._last_last_text, ["class", "interface"]) && !in_array$1(second_token.text, [":", ","])) {
      this.set_mode(MODE.BlockStatement);
    } else {
      this.set_mode(MODE.ObjectLiteral);
    }
  } else if (this._flags.last_token.type === TOKEN$2.OPERATOR && this._flags.last_token.text === "=>") {
    this.set_mode(MODE.BlockStatement);
  } else if (in_array$1(this._flags.last_token.type, [TOKEN$2.EQUALS, TOKEN$2.START_EXPR, TOKEN$2.COMMA, TOKEN$2.OPERATOR]) || reserved_array(this._flags.last_token, ["return", "throw", "import", "default"])) {
    this.set_mode(MODE.ObjectLiteral);
  } else {
    this.set_mode(MODE.BlockStatement);
  }
  if (this._flags.last_token) {
    if (reserved_array(this._flags.last_token.previous, ["class", "extends"])) {
      this._flags.class_start_block = true;
    }
  }
  var empty_braces = !next_token.comments_before && next_token.text === "}";
  var empty_anonymous_function = empty_braces && this._flags.last_word === "function" && this._flags.last_token.type === TOKEN$2.END_EXPR;
  if (this._options.brace_preserve_inline) {
    var index2 = 0;
    var check_token = null;
    this._flags.inline_frame = true;
    do {
      index2 += 1;
      check_token = this._tokens.peek(index2 - 1);
      if (check_token.newlines) {
        this._flags.inline_frame = false;
        break;
      }
    } while (check_token.type !== TOKEN$2.EOF && !(check_token.type === TOKEN$2.END_BLOCK && check_token.opened === current_token));
  }
  if ((this._options.brace_style === "expand" || this._options.brace_style === "none" && current_token.newlines) && !this._flags.inline_frame) {
    if (this._flags.last_token.type !== TOKEN$2.OPERATOR && (empty_anonymous_function || this._flags.last_token.type === TOKEN$2.EQUALS || reserved_array(this._flags.last_token, special_words) && this._flags.last_token.text !== "else")) {
      this._output.space_before_token = true;
    } else {
      this.print_newline(false, true);
    }
  } else {
    if (is_array(this._previous_flags.mode) && (this._flags.last_token.type === TOKEN$2.START_EXPR || this._flags.last_token.type === TOKEN$2.COMMA)) {
      if (this._flags.last_token.type === TOKEN$2.COMMA || this._options.space_in_paren) {
        this._output.space_before_token = true;
      }
      if (this._flags.last_token.type === TOKEN$2.COMMA || this._flags.last_token.type === TOKEN$2.START_EXPR && this._flags.inline_frame) {
        this.allow_wrap_or_preserved_newline(current_token);
        this._previous_flags.multiline_frame = this._previous_flags.multiline_frame || this._flags.multiline_frame;
        this._flags.multiline_frame = false;
      }
    }
    if (this._flags.last_token.type !== TOKEN$2.OPERATOR && this._flags.last_token.type !== TOKEN$2.START_EXPR) {
      if (this._flags.last_token.type === TOKEN$2.START_BLOCK && !this._flags.inline_frame) {
        this.print_newline();
      } else {
        this._output.space_before_token = true;
      }
    }
  }
  this.print_token(current_token);
  this.indent();
  if (!empty_braces && !(this._options.brace_preserve_inline && this._flags.inline_frame)) {
    this.print_newline();
  }
};
Beautifier$5.prototype.handle_end_block = function(current_token) {
  this.handle_whitespace_and_comments(current_token);
  while (this._flags.mode === MODE.Statement) {
    this.restore_mode();
  }
  var empty_braces = this._flags.last_token.type === TOKEN$2.START_BLOCK;
  if (this._flags.inline_frame && !empty_braces) {
    this._output.space_before_token = true;
  } else if (this._options.brace_style === "expand") {
    if (!empty_braces) {
      this.print_newline();
    }
  } else {
    if (!empty_braces) {
      if (is_array(this._flags.mode) && this._options.keep_array_indentation) {
        this._options.keep_array_indentation = false;
        this.print_newline();
        this._options.keep_array_indentation = true;
      } else {
        this.print_newline();
      }
    }
  }
  this.restore_mode();
  this.print_token(current_token);
};
Beautifier$5.prototype.handle_word = function(current_token) {
  if (current_token.type === TOKEN$2.RESERVED) {
    if (in_array$1(current_token.text, ["set", "get"]) && this._flags.mode !== MODE.ObjectLiteral) {
      current_token.type = TOKEN$2.WORD;
    } else if (current_token.text === "import" && in_array$1(this._tokens.peek().text, ["(", "."])) {
      current_token.type = TOKEN$2.WORD;
    } else if (in_array$1(current_token.text, ["as", "from"]) && !this._flags.import_block) {
      current_token.type = TOKEN$2.WORD;
    } else if (this._flags.mode === MODE.ObjectLiteral) {
      var next_token = this._tokens.peek();
      if (next_token.text === ":") {
        current_token.type = TOKEN$2.WORD;
      }
    }
  }
  if (this.start_of_statement(current_token)) {
    if (reserved_array(this._flags.last_token, ["var", "let", "const"]) && current_token.type === TOKEN$2.WORD) {
      this._flags.declaration_statement = true;
    }
  } else if (current_token.newlines && !is_expression(this._flags.mode) && (this._flags.last_token.type !== TOKEN$2.OPERATOR || (this._flags.last_token.text === "--" || this._flags.last_token.text === "++")) && this._flags.last_token.type !== TOKEN$2.EQUALS && (this._options.preserve_newlines || !reserved_array(this._flags.last_token, ["var", "let", "const", "set", "get"]))) {
    this.handle_whitespace_and_comments(current_token);
    this.print_newline();
  } else {
    this.handle_whitespace_and_comments(current_token);
  }
  if (this._flags.do_block && !this._flags.do_while) {
    if (reserved_word(current_token, "while")) {
      this._output.space_before_token = true;
      this.print_token(current_token);
      this._output.space_before_token = true;
      this._flags.do_while = true;
      return;
    } else {
      this.print_newline();
      this._flags.do_block = false;
    }
  }
  if (this._flags.if_block) {
    if (!this._flags.else_block && reserved_word(current_token, "else")) {
      this._flags.else_block = true;
    } else {
      while (this._flags.mode === MODE.Statement) {
        this.restore_mode();
      }
      this._flags.if_block = false;
      this._flags.else_block = false;
    }
  }
  if (this._flags.in_case_statement && reserved_array(current_token, ["case", "default"])) {
    this.print_newline();
    if (!this._flags.case_block && (this._flags.case_body || this._options.jslint_happy)) {
      this.deindent();
    }
    this._flags.case_body = false;
    this.print_token(current_token);
    this._flags.in_case = true;
    return;
  }
  if (this._flags.last_token.type === TOKEN$2.COMMA || this._flags.last_token.type === TOKEN$2.START_EXPR || this._flags.last_token.type === TOKEN$2.EQUALS || this._flags.last_token.type === TOKEN$2.OPERATOR) {
    if (!this.start_of_object_property()) {
      this.allow_wrap_or_preserved_newline(current_token);
    }
  }
  if (reserved_word(current_token, "function")) {
    if (in_array$1(this._flags.last_token.text, ["}", ";"]) || this._output.just_added_newline() && !(in_array$1(this._flags.last_token.text, ["(", "[", "{", ":", "=", ","]) || this._flags.last_token.type === TOKEN$2.OPERATOR)) {
      if (!this._output.just_added_blankline() && !current_token.comments_before) {
        this.print_newline();
        this.print_newline(true);
      }
    }
    if (this._flags.last_token.type === TOKEN$2.RESERVED || this._flags.last_token.type === TOKEN$2.WORD) {
      if (reserved_array(this._flags.last_token, ["get", "set", "new", "export"]) || reserved_array(this._flags.last_token, newline_restricted_tokens)) {
        this._output.space_before_token = true;
      } else if (reserved_word(this._flags.last_token, "default") && this._last_last_text === "export") {
        this._output.space_before_token = true;
      } else if (this._flags.last_token.text === "declare") {
        this._output.space_before_token = true;
      } else {
        this.print_newline();
      }
    } else if (this._flags.last_token.type === TOKEN$2.OPERATOR || this._flags.last_token.text === "=") {
      this._output.space_before_token = true;
    } else if (!this._flags.multiline_frame && (is_expression(this._flags.mode) || is_array(this._flags.mode)))
      ;
    else {
      this.print_newline();
    }
    this.print_token(current_token);
    this._flags.last_word = current_token.text;
    return;
  }
  var prefix = "NONE";
  if (this._flags.last_token.type === TOKEN$2.END_BLOCK) {
    if (this._previous_flags.inline_frame) {
      prefix = "SPACE";
    } else if (!reserved_array(current_token, ["else", "catch", "finally", "from"])) {
      prefix = "NEWLINE";
    } else {
      if (this._options.brace_style === "expand" || this._options.brace_style === "end-expand" || this._options.brace_style === "none" && current_token.newlines) {
        prefix = "NEWLINE";
      } else {
        prefix = "SPACE";
        this._output.space_before_token = true;
      }
    }
  } else if (this._flags.last_token.type === TOKEN$2.SEMICOLON && this._flags.mode === MODE.BlockStatement) {
    prefix = "NEWLINE";
  } else if (this._flags.last_token.type === TOKEN$2.SEMICOLON && is_expression(this._flags.mode)) {
    prefix = "SPACE";
  } else if (this._flags.last_token.type === TOKEN$2.STRING) {
    prefix = "NEWLINE";
  } else if (this._flags.last_token.type === TOKEN$2.RESERVED || this._flags.last_token.type === TOKEN$2.WORD || this._flags.last_token.text === "*" && (in_array$1(this._last_last_text, ["function", "yield"]) || this._flags.mode === MODE.ObjectLiteral && in_array$1(this._last_last_text, ["{", ","]))) {
    prefix = "SPACE";
  } else if (this._flags.last_token.type === TOKEN$2.START_BLOCK) {
    if (this._flags.inline_frame) {
      prefix = "SPACE";
    } else {
      prefix = "NEWLINE";
    }
  } else if (this._flags.last_token.type === TOKEN$2.END_EXPR) {
    this._output.space_before_token = true;
    prefix = "NEWLINE";
  }
  if (reserved_array(current_token, line_starters) && this._flags.last_token.text !== ")") {
    if (this._flags.inline_frame || this._flags.last_token.text === "else" || this._flags.last_token.text === "export") {
      prefix = "SPACE";
    } else {
      prefix = "NEWLINE";
    }
  }
  if (reserved_array(current_token, ["else", "catch", "finally"])) {
    if ((!(this._flags.last_token.type === TOKEN$2.END_BLOCK && this._previous_flags.mode === MODE.BlockStatement) || this._options.brace_style === "expand" || this._options.brace_style === "end-expand" || this._options.brace_style === "none" && current_token.newlines) && !this._flags.inline_frame) {
      this.print_newline();
    } else {
      this._output.trim(true);
      var line = this._output.current_line;
      if (line.last() !== "}") {
        this.print_newline();
      }
      this._output.space_before_token = true;
    }
  } else if (prefix === "NEWLINE") {
    if (reserved_array(this._flags.last_token, special_words)) {
      this._output.space_before_token = true;
    } else if (this._flags.last_token.text === "declare" && reserved_array(current_token, ["var", "let", "const"])) {
      this._output.space_before_token = true;
    } else if (this._flags.last_token.type !== TOKEN$2.END_EXPR) {
      if ((this._flags.last_token.type !== TOKEN$2.START_EXPR || !reserved_array(current_token, ["var", "let", "const"])) && this._flags.last_token.text !== ":") {
        if (reserved_word(current_token, "if") && reserved_word(current_token.previous, "else")) {
          this._output.space_before_token = true;
        } else {
          this.print_newline();
        }
      }
    } else if (reserved_array(current_token, line_starters) && this._flags.last_token.text !== ")") {
      this.print_newline();
    }
  } else if (this._flags.multiline_frame && is_array(this._flags.mode) && this._flags.last_token.text === "," && this._last_last_text === "}") {
    this.print_newline();
  } else if (prefix === "SPACE") {
    this._output.space_before_token = true;
  }
  if (current_token.previous && (current_token.previous.type === TOKEN$2.WORD || current_token.previous.type === TOKEN$2.RESERVED)) {
    this._output.space_before_token = true;
  }
  this.print_token(current_token);
  this._flags.last_word = current_token.text;
  if (current_token.type === TOKEN$2.RESERVED) {
    if (current_token.text === "do") {
      this._flags.do_block = true;
    } else if (current_token.text === "if") {
      this._flags.if_block = true;
    } else if (current_token.text === "import") {
      this._flags.import_block = true;
    } else if (this._flags.import_block && reserved_word(current_token, "from")) {
      this._flags.import_block = false;
    }
  }
};
Beautifier$5.prototype.handle_semicolon = function(current_token) {
  if (this.start_of_statement(current_token)) {
    this._output.space_before_token = false;
  } else {
    this.handle_whitespace_and_comments(current_token);
  }
  var next_token = this._tokens.peek();
  while (this._flags.mode === MODE.Statement && !(this._flags.if_block && reserved_word(next_token, "else")) && !this._flags.do_block) {
    this.restore_mode();
  }
  if (this._flags.import_block) {
    this._flags.import_block = false;
  }
  this.print_token(current_token);
};
Beautifier$5.prototype.handle_string = function(current_token) {
  if (current_token.text.startsWith("`") && current_token.newlines === 0 && current_token.whitespace_before === "" && (current_token.previous.text === ")" || this._flags.last_token.type === TOKEN$2.WORD))
    ;
  else if (this.start_of_statement(current_token)) {
    this._output.space_before_token = true;
  } else {
    this.handle_whitespace_and_comments(current_token);
    if (this._flags.last_token.type === TOKEN$2.RESERVED || this._flags.last_token.type === TOKEN$2.WORD || this._flags.inline_frame) {
      this._output.space_before_token = true;
    } else if (this._flags.last_token.type === TOKEN$2.COMMA || this._flags.last_token.type === TOKEN$2.START_EXPR || this._flags.last_token.type === TOKEN$2.EQUALS || this._flags.last_token.type === TOKEN$2.OPERATOR) {
      if (!this.start_of_object_property()) {
        this.allow_wrap_or_preserved_newline(current_token);
      }
    } else if (current_token.text.startsWith("`") && this._flags.last_token.type === TOKEN$2.END_EXPR && (current_token.previous.text === "]" || current_token.previous.text === ")") && current_token.newlines === 0) {
      this._output.space_before_token = true;
    } else {
      this.print_newline();
    }
  }
  this.print_token(current_token);
};
Beautifier$5.prototype.handle_equals = function(current_token) {
  if (this.start_of_statement(current_token))
    ;
  else {
    this.handle_whitespace_and_comments(current_token);
  }
  if (this._flags.declaration_statement) {
    this._flags.declaration_assignment = true;
  }
  this._output.space_before_token = true;
  this.print_token(current_token);
  this._output.space_before_token = true;
};
Beautifier$5.prototype.handle_comma = function(current_token) {
  this.handle_whitespace_and_comments(current_token, true);
  this.print_token(current_token);
  this._output.space_before_token = true;
  if (this._flags.declaration_statement) {
    if (is_expression(this._flags.parent.mode)) {
      this._flags.declaration_assignment = false;
    }
    if (this._flags.declaration_assignment) {
      this._flags.declaration_assignment = false;
      this.print_newline(false, true);
    } else if (this._options.comma_first) {
      this.allow_wrap_or_preserved_newline(current_token);
    }
  } else if (this._flags.mode === MODE.ObjectLiteral || this._flags.mode === MODE.Statement && this._flags.parent.mode === MODE.ObjectLiteral) {
    if (this._flags.mode === MODE.Statement) {
      this.restore_mode();
    }
    if (!this._flags.inline_frame) {
      this.print_newline();
    }
  } else if (this._options.comma_first) {
    this.allow_wrap_or_preserved_newline(current_token);
  }
};
Beautifier$5.prototype.handle_operator = function(current_token) {
  var isGeneratorAsterisk = current_token.text === "*" && (reserved_array(this._flags.last_token, ["function", "yield"]) || in_array$1(this._flags.last_token.type, [TOKEN$2.START_BLOCK, TOKEN$2.COMMA, TOKEN$2.END_BLOCK, TOKEN$2.SEMICOLON]));
  var isUnary = in_array$1(current_token.text, ["-", "+"]) && (in_array$1(this._flags.last_token.type, [TOKEN$2.START_BLOCK, TOKEN$2.START_EXPR, TOKEN$2.EQUALS, TOKEN$2.OPERATOR]) || in_array$1(this._flags.last_token.text, line_starters) || this._flags.last_token.text === ",");
  if (this.start_of_statement(current_token))
    ;
  else {
    var preserve_statement_flags = !isGeneratorAsterisk;
    this.handle_whitespace_and_comments(current_token, preserve_statement_flags);
  }
  if (current_token.text === "*" && this._flags.last_token.type === TOKEN$2.DOT) {
    this.print_token(current_token);
    return;
  }
  if (current_token.text === "::") {
    this.print_token(current_token);
    return;
  }
  if (this._flags.last_token.type === TOKEN$2.OPERATOR && in_array$1(this._options.operator_position, OPERATOR_POSITION_BEFORE_OR_PRESERVE)) {
    this.allow_wrap_or_preserved_newline(current_token);
  }
  if (current_token.text === ":" && this._flags.in_case) {
    this.print_token(current_token);
    this._flags.in_case = false;
    this._flags.case_body = true;
    if (this._tokens.peek().type !== TOKEN$2.START_BLOCK) {
      this.indent();
      this.print_newline();
      this._flags.case_block = false;
    } else {
      this._flags.case_block = true;
      this._output.space_before_token = true;
    }
    return;
  }
  var space_before = true;
  var space_after = true;
  var in_ternary = false;
  if (current_token.text === ":") {
    if (this._flags.ternary_depth === 0) {
      space_before = false;
    } else {
      this._flags.ternary_depth -= 1;
      in_ternary = true;
    }
  } else if (current_token.text === "?") {
    this._flags.ternary_depth += 1;
  }
  if (!isUnary && !isGeneratorAsterisk && this._options.preserve_newlines && in_array$1(current_token.text, positionable_operators)) {
    var isColon = current_token.text === ":";
    var isTernaryColon = isColon && in_ternary;
    var isOtherColon = isColon && !in_ternary;
    switch (this._options.operator_position) {
      case OPERATOR_POSITION.before_newline:
        this._output.space_before_token = !isOtherColon;
        this.print_token(current_token);
        if (!isColon || isTernaryColon) {
          this.allow_wrap_or_preserved_newline(current_token);
        }
        this._output.space_before_token = true;
        return;
      case OPERATOR_POSITION.after_newline:
        this._output.space_before_token = true;
        if (!isColon || isTernaryColon) {
          if (this._tokens.peek().newlines) {
            this.print_newline(false, true);
          } else {
            this.allow_wrap_or_preserved_newline(current_token);
          }
        } else {
          this._output.space_before_token = false;
        }
        this.print_token(current_token);
        this._output.space_before_token = true;
        return;
      case OPERATOR_POSITION.preserve_newline:
        if (!isOtherColon) {
          this.allow_wrap_or_preserved_newline(current_token);
        }
        space_before = !(this._output.just_added_newline() || isOtherColon);
        this._output.space_before_token = space_before;
        this.print_token(current_token);
        this._output.space_before_token = true;
        return;
    }
  }
  if (isGeneratorAsterisk) {
    this.allow_wrap_or_preserved_newline(current_token);
    space_before = false;
    var next_token = this._tokens.peek();
    space_after = next_token && in_array$1(next_token.type, [TOKEN$2.WORD, TOKEN$2.RESERVED]);
  } else if (current_token.text === "...") {
    this.allow_wrap_or_preserved_newline(current_token);
    space_before = this._flags.last_token.type === TOKEN$2.START_BLOCK;
    space_after = false;
  } else if (in_array$1(current_token.text, ["--", "++", "!", "~"]) || isUnary) {
    if (this._flags.last_token.type === TOKEN$2.COMMA || this._flags.last_token.type === TOKEN$2.START_EXPR) {
      this.allow_wrap_or_preserved_newline(current_token);
    }
    space_before = false;
    space_after = false;
    if (current_token.newlines && (current_token.text === "--" || current_token.text === "++" || current_token.text === "~")) {
      var new_line_needed = reserved_array(this._flags.last_token, special_words) && current_token.newlines;
      if (new_line_needed && (this._previous_flags.if_block || this._previous_flags.else_block)) {
        this.restore_mode();
      }
      this.print_newline(new_line_needed, true);
    }
    if (this._flags.last_token.text === ";" && is_expression(this._flags.mode)) {
      space_before = true;
    }
    if (this._flags.last_token.type === TOKEN$2.RESERVED) {
      space_before = true;
    } else if (this._flags.last_token.type === TOKEN$2.END_EXPR) {
      space_before = !(this._flags.last_token.text === "]" && (current_token.text === "--" || current_token.text === "++"));
    } else if (this._flags.last_token.type === TOKEN$2.OPERATOR) {
      space_before = in_array$1(current_token.text, ["--", "-", "++", "+"]) && in_array$1(this._flags.last_token.text, ["--", "-", "++", "+"]);
      if (in_array$1(current_token.text, ["+", "-"]) && in_array$1(this._flags.last_token.text, ["--", "++"])) {
        space_after = true;
      }
    }
    if ((this._flags.mode === MODE.BlockStatement && !this._flags.inline_frame || this._flags.mode === MODE.Statement) && (this._flags.last_token.text === "{" || this._flags.last_token.text === ";")) {
      this.print_newline();
    }
  }
  this._output.space_before_token = this._output.space_before_token || space_before;
  this.print_token(current_token);
  this._output.space_before_token = space_after;
};
Beautifier$5.prototype.handle_block_comment = function(current_token, preserve_statement_flags) {
  if (this._output.raw) {
    this._output.add_raw_token(current_token);
    if (current_token.directives && current_token.directives.preserve === "end") {
      this._output.raw = this._options.test_output_raw;
    }
    return;
  }
  if (current_token.directives) {
    this.print_newline(false, preserve_statement_flags);
    this.print_token(current_token);
    if (current_token.directives.preserve === "start") {
      this._output.raw = true;
    }
    this.print_newline(false, true);
    return;
  }
  if (!acorn.newline.test(current_token.text) && !current_token.newlines) {
    this._output.space_before_token = true;
    this.print_token(current_token);
    this._output.space_before_token = true;
    return;
  } else {
    this.print_block_commment(current_token, preserve_statement_flags);
  }
};
Beautifier$5.prototype.print_block_commment = function(current_token, preserve_statement_flags) {
  var lines = split_linebreaks(current_token.text);
  var j;
  var javadoc = false;
  var starless = false;
  var lastIndent = current_token.whitespace_before;
  var lastIndentLength = lastIndent.length;
  this.print_newline(false, preserve_statement_flags);
  this.print_token_line_indentation(current_token);
  this._output.add_token(lines[0]);
  this.print_newline(false, preserve_statement_flags);
  if (lines.length > 1) {
    lines = lines.slice(1);
    javadoc = all_lines_start_with(lines, "*");
    starless = each_line_matches_indent(lines, lastIndent);
    if (javadoc) {
      this._flags.alignment = 1;
    }
    for (j = 0; j < lines.length; j++) {
      if (javadoc) {
        this.print_token_line_indentation(current_token);
        this._output.add_token(ltrim(lines[j]));
      } else if (starless && lines[j]) {
        this.print_token_line_indentation(current_token);
        this._output.add_token(lines[j].substring(lastIndentLength));
      } else {
        this._output.current_line.set_indent(-1);
        this._output.add_token(lines[j]);
      }
      this.print_newline(false, preserve_statement_flags);
    }
    this._flags.alignment = 0;
  }
};
Beautifier$5.prototype.handle_comment = function(current_token, preserve_statement_flags) {
  if (current_token.newlines) {
    this.print_newline(false, preserve_statement_flags);
  } else {
    this._output.trim(true);
  }
  this._output.space_before_token = true;
  this.print_token(current_token);
  this.print_newline(false, preserve_statement_flags);
};
Beautifier$5.prototype.handle_dot = function(current_token) {
  if (this.start_of_statement(current_token))
    ;
  else {
    this.handle_whitespace_and_comments(current_token, true);
  }
  if (this._flags.last_token.text.match("^[0-9]+$")) {
    this._output.space_before_token = true;
  }
  if (reserved_array(this._flags.last_token, special_words)) {
    this._output.space_before_token = false;
  } else {
    this.allow_wrap_or_preserved_newline(current_token, this._flags.last_token.text === ")" && this._options.break_chained_methods);
  }
  if (this._options.unindent_chained_methods && this._output.just_added_newline()) {
    this.deindent();
  }
  this.print_token(current_token);
};
Beautifier$5.prototype.handle_unknown = function(current_token, preserve_statement_flags) {
  this.print_token(current_token);
  if (current_token.text[current_token.text.length - 1] === "\n") {
    this.print_newline(false, preserve_statement_flags);
  }
};
Beautifier$5.prototype.handle_eof = function(current_token) {
  while (this._flags.mode === MODE.Statement) {
    this.restore_mode();
  }
  this.handle_whitespace_and_comments(current_token);
};
beautifier$2.Beautifier = Beautifier$5;
var Beautifier$4 = beautifier$2.Beautifier, Options$6 = options$3.Options;
function js_beautify$1(js_source_text, options2) {
  var beautifier2 = new Beautifier$4(js_source_text, options2);
  return beautifier2.beautify();
}
javascript.exports = js_beautify$1;
javascript.exports.defaultOptions = function() {
  return new Options$6();
};
var css = { exports: {} };
var beautifier$1 = {};
var options$1 = {};
var BaseOptions$1 = options$2.Options;
function Options$5(options2) {
  BaseOptions$1.call(this, options2, "css");
  this.selector_separator_newline = this._get_boolean("selector_separator_newline", true);
  this.newline_between_rules = this._get_boolean("newline_between_rules", true);
  var space_around_selector_separator = this._get_boolean("space_around_selector_separator");
  this.space_around_combinator = this._get_boolean("space_around_combinator") || space_around_selector_separator;
  var brace_style_split = this._get_selection_list("brace_style", ["collapse", "expand", "end-expand", "none", "preserve-inline"]);
  this.brace_style = "collapse";
  for (var bs = 0; bs < brace_style_split.length; bs++) {
    if (brace_style_split[bs] !== "expand") {
      this.brace_style = "collapse";
    } else {
      this.brace_style = brace_style_split[bs];
    }
  }
}
Options$5.prototype = new BaseOptions$1();
options$1.Options = Options$5;
var Options$4 = options$1.Options;
var Output$2 = output.Output;
var InputScanner = inputscanner.InputScanner;
var Directives$1 = directives.Directives;
var directives_core$1 = new Directives$1(/\/\*/, /\*\//);
var lineBreak$1 = /\r\n|[\r\n]/;
var allLineBreaks$1 = /\r\n|[\r\n]/g;
var whitespaceChar = /\s/;
var whitespacePattern = /(?:\s|\n)+/g;
var block_comment_pattern = /\/\*(?:[\s\S]*?)((?:\*\/)|$)/g;
var comment_pattern = /\/\/(?:[^\n\r\u2028\u2029]*)/g;
function Beautifier$3(source_text, options2) {
  this._source_text = source_text || "";
  this._options = new Options$4(options2);
  this._ch = null;
  this._input = null;
  this.NESTED_AT_RULE = {
    "@page": true,
    "@font-face": true,
    "@keyframes": true,
    "@media": true,
    "@supports": true,
    "@document": true
  };
  this.CONDITIONAL_GROUP_RULE = {
    "@media": true,
    "@supports": true,
    "@document": true
  };
  this.NON_SEMICOLON_NEWLINE_PROPERTY = [
    "grid-template-areas",
    "grid-template"
  ];
}
Beautifier$3.prototype.eatString = function(endChars) {
  var result = "";
  this._ch = this._input.next();
  while (this._ch) {
    result += this._ch;
    if (this._ch === "\\") {
      result += this._input.next();
    } else if (endChars.indexOf(this._ch) !== -1 || this._ch === "\n") {
      break;
    }
    this._ch = this._input.next();
  }
  return result;
};
Beautifier$3.prototype.eatWhitespace = function(allowAtLeastOneNewLine) {
  var result = whitespaceChar.test(this._input.peek());
  var newline_count = 0;
  while (whitespaceChar.test(this._input.peek())) {
    this._ch = this._input.next();
    if (allowAtLeastOneNewLine && this._ch === "\n") {
      if (newline_count === 0 || newline_count < this._options.max_preserve_newlines) {
        newline_count++;
        this._output.add_new_line(true);
      }
    }
  }
  return result;
};
Beautifier$3.prototype.foundNestedPseudoClass = function() {
  var openParen = 0;
  var i = 1;
  var ch = this._input.peek(i);
  while (ch) {
    if (ch === "{") {
      return true;
    } else if (ch === "(") {
      openParen += 1;
    } else if (ch === ")") {
      if (openParen === 0) {
        return false;
      }
      openParen -= 1;
    } else if (ch === ";" || ch === "}") {
      return false;
    }
    i++;
    ch = this._input.peek(i);
  }
  return false;
};
Beautifier$3.prototype.print_string = function(output_string) {
  this._output.set_indent(this._indentLevel);
  this._output.non_breaking_space = true;
  this._output.add_token(output_string);
};
Beautifier$3.prototype.preserveSingleSpace = function(isAfterSpace) {
  if (isAfterSpace) {
    this._output.space_before_token = true;
  }
};
Beautifier$3.prototype.indent = function() {
  this._indentLevel++;
};
Beautifier$3.prototype.outdent = function() {
  if (this._indentLevel > 0) {
    this._indentLevel--;
  }
};
Beautifier$3.prototype.beautify = function() {
  if (this._options.disabled) {
    return this._source_text;
  }
  var source_text = this._source_text;
  var eol = this._options.eol;
  if (eol === "auto") {
    eol = "\n";
    if (source_text && lineBreak$1.test(source_text || "")) {
      eol = source_text.match(lineBreak$1)[0];
    }
  }
  source_text = source_text.replace(allLineBreaks$1, "\n");
  var baseIndentString = source_text.match(/^[\t ]*/)[0];
  this._output = new Output$2(this._options, baseIndentString);
  this._input = new InputScanner(source_text);
  this._indentLevel = 0;
  this._nestedLevel = 0;
  this._ch = null;
  var parenLevel = 0;
  var insideRule = false;
  var insidePropertyValue = false;
  var enteringConditionalGroup = false;
  var insideAtExtend = false;
  var insideAtImport = false;
  var insideScssMap = false;
  var topCharacter = this._ch;
  var insideNonSemiColonValues = false;
  var whitespace;
  var isAfterSpace;
  var previous_ch;
  while (true) {
    whitespace = this._input.read(whitespacePattern);
    isAfterSpace = whitespace !== "";
    previous_ch = topCharacter;
    this._ch = this._input.next();
    if (this._ch === "\\" && this._input.hasNext()) {
      this._ch += this._input.next();
    }
    topCharacter = this._ch;
    if (!this._ch) {
      break;
    } else if (this._ch === "/" && this._input.peek() === "*") {
      this._output.add_new_line();
      this._input.back();
      var comment2 = this._input.read(block_comment_pattern);
      var directives2 = directives_core$1.get_directives(comment2);
      if (directives2 && directives2.ignore === "start") {
        comment2 += directives_core$1.readIgnored(this._input);
      }
      this.print_string(comment2);
      this.eatWhitespace(true);
      this._output.add_new_line();
    } else if (this._ch === "/" && this._input.peek() === "/") {
      this._output.space_before_token = true;
      this._input.back();
      this.print_string(this._input.read(comment_pattern));
      this.eatWhitespace(true);
    } else if (this._ch === "@" || this._ch === "$") {
      this.preserveSingleSpace(isAfterSpace);
      if (this._input.peek() === "{") {
        this.print_string(this._ch + this.eatString("}"));
      } else {
        this.print_string(this._ch);
        var variableOrRule = this._input.peekUntilAfter(/[: ,;{}()[\]\/='"]/g);
        if (variableOrRule.match(/[ :]$/)) {
          variableOrRule = this.eatString(": ").replace(/\s$/, "");
          this.print_string(variableOrRule);
          this._output.space_before_token = true;
        }
        variableOrRule = variableOrRule.replace(/\s$/, "");
        if (variableOrRule === "extend") {
          insideAtExtend = true;
        } else if (variableOrRule === "import") {
          insideAtImport = true;
        }
        if (variableOrRule in this.NESTED_AT_RULE) {
          this._nestedLevel += 1;
          if (variableOrRule in this.CONDITIONAL_GROUP_RULE) {
            enteringConditionalGroup = true;
          }
        } else if (!insideRule && parenLevel === 0 && variableOrRule.indexOf(":") !== -1) {
          insidePropertyValue = true;
          this.indent();
        }
      }
    } else if (this._ch === "#" && this._input.peek() === "{") {
      this.preserveSingleSpace(isAfterSpace);
      this.print_string(this._ch + this.eatString("}"));
    } else if (this._ch === "{") {
      if (insidePropertyValue) {
        insidePropertyValue = false;
        this.outdent();
      }
      if (enteringConditionalGroup) {
        enteringConditionalGroup = false;
        insideRule = this._indentLevel >= this._nestedLevel;
      } else {
        insideRule = this._indentLevel >= this._nestedLevel - 1;
      }
      if (this._options.newline_between_rules && insideRule) {
        if (this._output.previous_line && this._output.previous_line.item(-1) !== "{") {
          this._output.ensure_empty_line_above("/", ",");
        }
      }
      this._output.space_before_token = true;
      if (this._options.brace_style === "expand") {
        this._output.add_new_line();
        this.print_string(this._ch);
        this.indent();
        this._output.set_indent(this._indentLevel);
      } else {
        if (previous_ch === "(") {
          this._output.space_before_token = false;
        } else if (previous_ch !== ",") {
          this.indent();
        }
        this.print_string(this._ch);
      }
      this.eatWhitespace(true);
      this._output.add_new_line();
    } else if (this._ch === "}") {
      this.outdent();
      this._output.add_new_line();
      if (previous_ch === "{") {
        this._output.trim(true);
      }
      insideAtImport = false;
      insideAtExtend = false;
      if (insidePropertyValue) {
        this.outdent();
        insidePropertyValue = false;
      }
      this.print_string(this._ch);
      insideRule = false;
      if (this._nestedLevel) {
        this._nestedLevel--;
      }
      this.eatWhitespace(true);
      this._output.add_new_line();
      if (this._options.newline_between_rules && !this._output.just_added_blankline()) {
        if (this._input.peek() !== "}") {
          this._output.add_new_line(true);
        }
      }
      if (this._input.peek() === ")") {
        this._output.trim(true);
        if (this._options.brace_style === "expand") {
          this._output.add_new_line(true);
        }
      }
    } else if (this._ch === ":") {
      for (var i = 0; i < this.NON_SEMICOLON_NEWLINE_PROPERTY.length; i++) {
        if (this._input.lookBack(this.NON_SEMICOLON_NEWLINE_PROPERTY[i])) {
          insideNonSemiColonValues = true;
          break;
        }
      }
      if ((insideRule || enteringConditionalGroup) && !(this._input.lookBack("&") || this.foundNestedPseudoClass()) && !this._input.lookBack("(") && !insideAtExtend && parenLevel === 0) {
        this.print_string(":");
        if (!insidePropertyValue) {
          insidePropertyValue = true;
          this._output.space_before_token = true;
          this.eatWhitespace(true);
          this.indent();
        }
      } else {
        if (this._input.lookBack(" ")) {
          this._output.space_before_token = true;
        }
        if (this._input.peek() === ":") {
          this._ch = this._input.next();
          this.print_string("::");
        } else {
          this.print_string(":");
        }
      }
    } else if (this._ch === '"' || this._ch === "'") {
      var preserveQuoteSpace = previous_ch === '"' || previous_ch === "'";
      this.preserveSingleSpace(preserveQuoteSpace || isAfterSpace);
      this.print_string(this._ch + this.eatString(this._ch));
      this.eatWhitespace(true);
    } else if (this._ch === ";") {
      insideNonSemiColonValues = false;
      if (parenLevel === 0) {
        if (insidePropertyValue) {
          this.outdent();
          insidePropertyValue = false;
        }
        insideAtExtend = false;
        insideAtImport = false;
        this.print_string(this._ch);
        this.eatWhitespace(true);
        if (this._input.peek() !== "/") {
          this._output.add_new_line();
        }
      } else {
        this.print_string(this._ch);
        this.eatWhitespace(true);
        this._output.space_before_token = true;
      }
    } else if (this._ch === "(") {
      if (this._input.lookBack("url")) {
        this.print_string(this._ch);
        this.eatWhitespace();
        parenLevel++;
        this.indent();
        this._ch = this._input.next();
        if (this._ch === ")" || this._ch === '"' || this._ch === "'") {
          this._input.back();
        } else if (this._ch) {
          this.print_string(this._ch + this.eatString(")"));
          if (parenLevel) {
            parenLevel--;
            this.outdent();
          }
        }
      } else {
        var space_needed = false;
        if (this._input.lookBack("with")) {
          space_needed = true;
        }
        this.preserveSingleSpace(isAfterSpace || space_needed);
        this.print_string(this._ch);
        if (insidePropertyValue && previous_ch === "$" && this._options.selector_separator_newline) {
          this._output.add_new_line();
          insideScssMap = true;
        } else {
          this.eatWhitespace();
          parenLevel++;
          this.indent();
        }
      }
    } else if (this._ch === ")") {
      if (parenLevel) {
        parenLevel--;
        this.outdent();
      }
      if (insideScssMap && this._input.peek() === ";" && this._options.selector_separator_newline) {
        insideScssMap = false;
        this.outdent();
        this._output.add_new_line();
      }
      this.print_string(this._ch);
    } else if (this._ch === ",") {
      this.print_string(this._ch);
      this.eatWhitespace(true);
      if (this._options.selector_separator_newline && (!insidePropertyValue || insideScssMap) && parenLevel === 0 && !insideAtImport && !insideAtExtend) {
        this._output.add_new_line();
      } else {
        this._output.space_before_token = true;
      }
    } else if ((this._ch === ">" || this._ch === "+" || this._ch === "~") && !insidePropertyValue && parenLevel === 0) {
      if (this._options.space_around_combinator) {
        this._output.space_before_token = true;
        this.print_string(this._ch);
        this._output.space_before_token = true;
      } else {
        this.print_string(this._ch);
        this.eatWhitespace();
        if (this._ch && whitespaceChar.test(this._ch)) {
          this._ch = "";
        }
      }
    } else if (this._ch === "]") {
      this.print_string(this._ch);
    } else if (this._ch === "[") {
      this.preserveSingleSpace(isAfterSpace);
      this.print_string(this._ch);
    } else if (this._ch === "=") {
      this.eatWhitespace();
      this.print_string("=");
      if (whitespaceChar.test(this._ch)) {
        this._ch = "";
      }
    } else if (this._ch === "!" && !this._input.lookBack("\\")) {
      this._output.space_before_token = true;
      this.print_string(this._ch);
    } else {
      var preserveAfterSpace = previous_ch === '"' || previous_ch === "'";
      this.preserveSingleSpace(preserveAfterSpace || isAfterSpace);
      this.print_string(this._ch);
      if (!this._output.just_added_newline() && this._input.peek() === "\n" && insideNonSemiColonValues) {
        this._output.add_new_line();
      }
    }
  }
  var sweetCode = this._output.get_code(eol);
  return sweetCode;
};
beautifier$1.Beautifier = Beautifier$3;
var Beautifier$2 = beautifier$1.Beautifier, Options$3 = options$1.Options;
function css_beautify$1(source_text, options2) {
  var beautifier2 = new Beautifier$2(source_text, options2);
  return beautifier2.beautify();
}
css.exports = css_beautify$1;
css.exports.defaultOptions = function() {
  return new Options$3();
};
var html = { exports: {} };
var beautifier = {};
var options = {};
var BaseOptions = options$2.Options;
function Options$2(options2) {
  BaseOptions.call(this, options2, "html");
  if (this.templating.length === 1 && this.templating[0] === "auto") {
    this.templating = ["django", "erb", "handlebars", "php"];
  }
  this.indent_inner_html = this._get_boolean("indent_inner_html");
  this.indent_body_inner_html = this._get_boolean("indent_body_inner_html", true);
  this.indent_head_inner_html = this._get_boolean("indent_head_inner_html", true);
  this.indent_handlebars = this._get_boolean("indent_handlebars", true);
  this.wrap_attributes = this._get_selection("wrap_attributes", ["auto", "force", "force-aligned", "force-expand-multiline", "aligned-multiple", "preserve", "preserve-aligned"]);
  this.wrap_attributes_indent_size = this._get_number("wrap_attributes_indent_size", this.indent_size);
  this.extra_liners = this._get_array("extra_liners", ["head", "body", "/html"]);
  this.inline = this._get_array("inline", [
    "a",
    "abbr",
    "area",
    "audio",
    "b",
    "bdi",
    "bdo",
    "br",
    "button",
    "canvas",
    "cite",
    "code",
    "data",
    "datalist",
    "del",
    "dfn",
    "em",
    "embed",
    "i",
    "iframe",
    "img",
    "input",
    "ins",
    "kbd",
    "keygen",
    "label",
    "map",
    "mark",
    "math",
    "meter",
    "noscript",
    "object",
    "output",
    "progress",
    "q",
    "ruby",
    "s",
    "samp",
    "select",
    "small",
    "span",
    "strong",
    "sub",
    "sup",
    "svg",
    "template",
    "textarea",
    "time",
    "u",
    "var",
    "video",
    "wbr",
    "text",
    "acronym",
    "big",
    "strike",
    "tt"
  ]);
  this.void_elements = this._get_array("void_elements", [
    "area",
    "base",
    "br",
    "col",
    "embed",
    "hr",
    "img",
    "input",
    "keygen",
    "link",
    "menuitem",
    "meta",
    "param",
    "source",
    "track",
    "wbr",
    "!doctype",
    "?xml",
    "basefont",
    "isindex"
  ]);
  this.unformatted = this._get_array("unformatted", []);
  this.content_unformatted = this._get_array("content_unformatted", [
    "pre",
    "textarea"
  ]);
  this.unformatted_content_delimiter = this._get_characters("unformatted_content_delimiter");
  this.indent_scripts = this._get_selection("indent_scripts", ["normal", "keep", "separate"]);
}
Options$2.prototype = new BaseOptions();
options.Options = Options$2;
var tokenizer = {};
var BaseTokenizer = tokenizer$1.Tokenizer;
var BASETOKEN = tokenizer$1.TOKEN;
var Directives = directives.Directives;
var TemplatablePattern = templatablepattern.TemplatablePattern;
var Pattern = pattern.Pattern;
var TOKEN$1 = {
  TAG_OPEN: "TK_TAG_OPEN",
  TAG_CLOSE: "TK_TAG_CLOSE",
  ATTRIBUTE: "TK_ATTRIBUTE",
  EQUALS: "TK_EQUALS",
  VALUE: "TK_VALUE",
  COMMENT: "TK_COMMENT",
  TEXT: "TK_TEXT",
  UNKNOWN: "TK_UNKNOWN",
  START: BASETOKEN.START,
  RAW: BASETOKEN.RAW,
  EOF: BASETOKEN.EOF
};
var directives_core = new Directives(/<\!--/, /-->/);
var Tokenizer$2 = function(input_string, options2) {
  BaseTokenizer.call(this, input_string, options2);
  this._current_tag_name = "";
  var templatable_reader = new TemplatablePattern(this._input).read_options(this._options);
  var pattern_reader = new Pattern(this._input);
  this.__patterns = {
    word: templatable_reader.until(/[\n\r\t <]/),
    single_quote: templatable_reader.until_after(/'/),
    double_quote: templatable_reader.until_after(/"/),
    attribute: templatable_reader.until(/[\n\r\t =>]|\/>/),
    element_name: templatable_reader.until(/[\n\r\t >\/]/),
    handlebars_comment: pattern_reader.starting_with(/{{!--/).until_after(/--}}/),
    handlebars: pattern_reader.starting_with(/{{/).until_after(/}}/),
    handlebars_open: pattern_reader.until(/[\n\r\t }]/),
    handlebars_raw_close: pattern_reader.until(/}}/),
    comment: pattern_reader.starting_with(/<!--/).until_after(/-->/),
    cdata: pattern_reader.starting_with(/<!\[CDATA\[/).until_after(/]]>/),
    conditional_comment: pattern_reader.starting_with(/<!\[/).until_after(/]>/),
    processing: pattern_reader.starting_with(/<\?/).until_after(/\?>/)
  };
  if (this._options.indent_handlebars) {
    this.__patterns.word = this.__patterns.word.exclude("handlebars");
  }
  this._unformatted_content_delimiter = null;
  if (this._options.unformatted_content_delimiter) {
    var literal_regexp = this._input.get_literal_regexp(this._options.unformatted_content_delimiter);
    this.__patterns.unformatted_content_delimiter = pattern_reader.matching(literal_regexp).until_after(literal_regexp);
  }
};
Tokenizer$2.prototype = new BaseTokenizer();
Tokenizer$2.prototype._is_comment = function(current_token) {
  return false;
};
Tokenizer$2.prototype._is_opening = function(current_token) {
  return current_token.type === TOKEN$1.TAG_OPEN;
};
Tokenizer$2.prototype._is_closing = function(current_token, open_token) {
  return current_token.type === TOKEN$1.TAG_CLOSE && (open_token && ((current_token.text === ">" || current_token.text === "/>") && open_token.text[0] === "<" || current_token.text === "}}" && open_token.text[0] === "{" && open_token.text[1] === "{"));
};
Tokenizer$2.prototype._reset = function() {
  this._current_tag_name = "";
};
Tokenizer$2.prototype._get_next_token = function(previous_token, open_token) {
  var token2 = null;
  this._readWhitespace();
  var c = this._input.peek();
  if (c === null) {
    return this._create_token(TOKEN$1.EOF, "");
  }
  token2 = token2 || this._read_open_handlebars(c, open_token);
  token2 = token2 || this._read_attribute(c, previous_token, open_token);
  token2 = token2 || this._read_close(c, open_token);
  token2 = token2 || this._read_raw_content(c, previous_token, open_token);
  token2 = token2 || this._read_content_word(c);
  token2 = token2 || this._read_comment_or_cdata(c);
  token2 = token2 || this._read_processing(c);
  token2 = token2 || this._read_open(c, open_token);
  token2 = token2 || this._create_token(TOKEN$1.UNKNOWN, this._input.next());
  return token2;
};
Tokenizer$2.prototype._read_comment_or_cdata = function(c) {
  var token2 = null;
  var resulting_string = null;
  var directives2 = null;
  if (c === "<") {
    var peek1 = this._input.peek(1);
    if (peek1 === "!") {
      resulting_string = this.__patterns.comment.read();
      if (resulting_string) {
        directives2 = directives_core.get_directives(resulting_string);
        if (directives2 && directives2.ignore === "start") {
          resulting_string += directives_core.readIgnored(this._input);
        }
      } else {
        resulting_string = this.__patterns.cdata.read();
      }
    }
    if (resulting_string) {
      token2 = this._create_token(TOKEN$1.COMMENT, resulting_string);
      token2.directives = directives2;
    }
  }
  return token2;
};
Tokenizer$2.prototype._read_processing = function(c) {
  var token2 = null;
  var resulting_string = null;
  var directives2 = null;
  if (c === "<") {
    var peek1 = this._input.peek(1);
    if (peek1 === "!" || peek1 === "?") {
      resulting_string = this.__patterns.conditional_comment.read();
      resulting_string = resulting_string || this.__patterns.processing.read();
    }
    if (resulting_string) {
      token2 = this._create_token(TOKEN$1.COMMENT, resulting_string);
      token2.directives = directives2;
    }
  }
  return token2;
};
Tokenizer$2.prototype._read_open = function(c, open_token) {
  var resulting_string = null;
  var token2 = null;
  if (!open_token) {
    if (c === "<") {
      resulting_string = this._input.next();
      if (this._input.peek() === "/") {
        resulting_string += this._input.next();
      }
      resulting_string += this.__patterns.element_name.read();
      token2 = this._create_token(TOKEN$1.TAG_OPEN, resulting_string);
    }
  }
  return token2;
};
Tokenizer$2.prototype._read_open_handlebars = function(c, open_token) {
  var resulting_string = null;
  var token2 = null;
  if (!open_token) {
    if (this._options.indent_handlebars && c === "{" && this._input.peek(1) === "{") {
      if (this._input.peek(2) === "!") {
        resulting_string = this.__patterns.handlebars_comment.read();
        resulting_string = resulting_string || this.__patterns.handlebars.read();
        token2 = this._create_token(TOKEN$1.COMMENT, resulting_string);
      } else {
        resulting_string = this.__patterns.handlebars_open.read();
        token2 = this._create_token(TOKEN$1.TAG_OPEN, resulting_string);
      }
    }
  }
  return token2;
};
Tokenizer$2.prototype._read_close = function(c, open_token) {
  var resulting_string = null;
  var token2 = null;
  if (open_token) {
    if (open_token.text[0] === "<" && (c === ">" || c === "/" && this._input.peek(1) === ">")) {
      resulting_string = this._input.next();
      if (c === "/") {
        resulting_string += this._input.next();
      }
      token2 = this._create_token(TOKEN$1.TAG_CLOSE, resulting_string);
    } else if (open_token.text[0] === "{" && c === "}" && this._input.peek(1) === "}") {
      this._input.next();
      this._input.next();
      token2 = this._create_token(TOKEN$1.TAG_CLOSE, "}}");
    }
  }
  return token2;
};
Tokenizer$2.prototype._read_attribute = function(c, previous_token, open_token) {
  var token2 = null;
  var resulting_string = "";
  if (open_token && open_token.text[0] === "<") {
    if (c === "=") {
      token2 = this._create_token(TOKEN$1.EQUALS, this._input.next());
    } else if (c === '"' || c === "'") {
      var content = this._input.next();
      if (c === '"') {
        content += this.__patterns.double_quote.read();
      } else {
        content += this.__patterns.single_quote.read();
      }
      token2 = this._create_token(TOKEN$1.VALUE, content);
    } else {
      resulting_string = this.__patterns.attribute.read();
      if (resulting_string) {
        if (previous_token.type === TOKEN$1.EQUALS) {
          token2 = this._create_token(TOKEN$1.VALUE, resulting_string);
        } else {
          token2 = this._create_token(TOKEN$1.ATTRIBUTE, resulting_string);
        }
      }
    }
  }
  return token2;
};
Tokenizer$2.prototype._is_content_unformatted = function(tag_name) {
  return this._options.void_elements.indexOf(tag_name) === -1 && (this._options.content_unformatted.indexOf(tag_name) !== -1 || this._options.unformatted.indexOf(tag_name) !== -1);
};
Tokenizer$2.prototype._read_raw_content = function(c, previous_token, open_token) {
  var resulting_string = "";
  if (open_token && open_token.text[0] === "{") {
    resulting_string = this.__patterns.handlebars_raw_close.read();
  } else if (previous_token.type === TOKEN$1.TAG_CLOSE && previous_token.opened.text[0] === "<" && previous_token.text[0] !== "/") {
    var tag_name = previous_token.opened.text.substr(1).toLowerCase();
    if (tag_name === "script" || tag_name === "style") {
      var token2 = this._read_comment_or_cdata(c);
      if (token2) {
        token2.type = TOKEN$1.TEXT;
        return token2;
      }
      resulting_string = this._input.readUntil(new RegExp("</" + tag_name + "[\\n\\r\\t ]*?>", "ig"));
    } else if (this._is_content_unformatted(tag_name)) {
      resulting_string = this._input.readUntil(new RegExp("</" + tag_name + "[\\n\\r\\t ]*?>", "ig"));
    }
  }
  if (resulting_string) {
    return this._create_token(TOKEN$1.TEXT, resulting_string);
  }
  return null;
};
Tokenizer$2.prototype._read_content_word = function(c) {
  var resulting_string = "";
  if (this._options.unformatted_content_delimiter) {
    if (c === this._options.unformatted_content_delimiter[0]) {
      resulting_string = this.__patterns.unformatted_content_delimiter.read();
    }
  }
  if (!resulting_string) {
    resulting_string = this.__patterns.word.read();
  }
  if (resulting_string) {
    return this._create_token(TOKEN$1.TEXT, resulting_string);
  }
};
tokenizer.Tokenizer = Tokenizer$2;
tokenizer.TOKEN = TOKEN$1;
var Options$1 = options.Options;
var Output$1 = output.Output;
var Tokenizer$1 = tokenizer.Tokenizer;
var TOKEN = tokenizer.TOKEN;
var lineBreak = /\r\n|[\r\n]/;
var allLineBreaks = /\r\n|[\r\n]/g;
var Printer = function(options2, base_indent_string) {
  this.indent_level = 0;
  this.alignment_size = 0;
  this.max_preserve_newlines = options2.max_preserve_newlines;
  this.preserve_newlines = options2.preserve_newlines;
  this._output = new Output$1(options2, base_indent_string);
};
Printer.prototype.current_line_has_match = function(pattern2) {
  return this._output.current_line.has_match(pattern2);
};
Printer.prototype.set_space_before_token = function(value, non_breaking) {
  this._output.space_before_token = value;
  this._output.non_breaking_space = non_breaking;
};
Printer.prototype.set_wrap_point = function() {
  this._output.set_indent(this.indent_level, this.alignment_size);
  this._output.set_wrap_point();
};
Printer.prototype.add_raw_token = function(token2) {
  this._output.add_raw_token(token2);
};
Printer.prototype.print_preserved_newlines = function(raw_token) {
  var newlines = 0;
  if (raw_token.type !== TOKEN.TEXT && raw_token.previous.type !== TOKEN.TEXT) {
    newlines = raw_token.newlines ? 1 : 0;
  }
  if (this.preserve_newlines) {
    newlines = raw_token.newlines < this.max_preserve_newlines + 1 ? raw_token.newlines : this.max_preserve_newlines + 1;
  }
  for (var n = 0; n < newlines; n++) {
    this.print_newline(n > 0);
  }
  return newlines !== 0;
};
Printer.prototype.traverse_whitespace = function(raw_token) {
  if (raw_token.whitespace_before || raw_token.newlines) {
    if (!this.print_preserved_newlines(raw_token)) {
      this._output.space_before_token = true;
    }
    return true;
  }
  return false;
};
Printer.prototype.previous_token_wrapped = function() {
  return this._output.previous_token_wrapped;
};
Printer.prototype.print_newline = function(force) {
  this._output.add_new_line(force);
};
Printer.prototype.print_token = function(token2) {
  if (token2.text) {
    this._output.set_indent(this.indent_level, this.alignment_size);
    this._output.add_token(token2.text);
  }
};
Printer.prototype.indent = function() {
  this.indent_level++;
};
Printer.prototype.get_full_indent = function(level) {
  level = this.indent_level + (level || 0);
  if (level < 1) {
    return "";
  }
  return this._output.get_indent_string(level);
};
var get_type_attribute = function(start_token) {
  var result = null;
  var raw_token = start_token.next;
  while (raw_token.type !== TOKEN.EOF && start_token.closed !== raw_token) {
    if (raw_token.type === TOKEN.ATTRIBUTE && raw_token.text === "type") {
      if (raw_token.next && raw_token.next.type === TOKEN.EQUALS && raw_token.next.next && raw_token.next.next.type === TOKEN.VALUE) {
        result = raw_token.next.next.text;
      }
      break;
    }
    raw_token = raw_token.next;
  }
  return result;
};
var get_custom_beautifier_name = function(tag_check, raw_token) {
  var typeAttribute = null;
  var result = null;
  if (!raw_token.closed) {
    return null;
  }
  if (tag_check === "script") {
    typeAttribute = "text/javascript";
  } else if (tag_check === "style") {
    typeAttribute = "text/css";
  }
  typeAttribute = get_type_attribute(raw_token) || typeAttribute;
  if (typeAttribute.search("text/css") > -1) {
    result = "css";
  } else if (typeAttribute.search(/module|((text|application|dojo)\/(x-)?(javascript|ecmascript|jscript|livescript|(ld\+)?json|method|aspect))/) > -1) {
    result = "javascript";
  } else if (typeAttribute.search(/(text|application|dojo)\/(x-)?(html)/) > -1) {
    result = "html";
  } else if (typeAttribute.search(/test\/null/) > -1) {
    result = "null";
  }
  return result;
};
function in_array(what, arr) {
  return arr.indexOf(what) !== -1;
}
function TagFrame(parent, parser_token, indent_level) {
  this.parent = parent || null;
  this.tag = parser_token ? parser_token.tag_name : "";
  this.indent_level = indent_level || 0;
  this.parser_token = parser_token || null;
}
function TagStack(printer) {
  this._printer = printer;
  this._current_frame = null;
}
TagStack.prototype.get_parser_token = function() {
  return this._current_frame ? this._current_frame.parser_token : null;
};
TagStack.prototype.record_tag = function(parser_token) {
  var new_frame = new TagFrame(this._current_frame, parser_token, this._printer.indent_level);
  this._current_frame = new_frame;
};
TagStack.prototype._try_pop_frame = function(frame) {
  var parser_token = null;
  if (frame) {
    parser_token = frame.parser_token;
    this._printer.indent_level = frame.indent_level;
    this._current_frame = frame.parent;
  }
  return parser_token;
};
TagStack.prototype._get_frame = function(tag_list, stop_list) {
  var frame = this._current_frame;
  while (frame) {
    if (tag_list.indexOf(frame.tag) !== -1) {
      break;
    } else if (stop_list && stop_list.indexOf(frame.tag) !== -1) {
      frame = null;
      break;
    }
    frame = frame.parent;
  }
  return frame;
};
TagStack.prototype.try_pop = function(tag, stop_list) {
  var frame = this._get_frame([tag], stop_list);
  return this._try_pop_frame(frame);
};
TagStack.prototype.indent_to_tag = function(tag_list) {
  var frame = this._get_frame(tag_list);
  if (frame) {
    this._printer.indent_level = frame.indent_level;
  }
};
function Beautifier$1(source_text, options2, js_beautify2, css_beautify2) {
  this._source_text = source_text || "";
  options2 = options2 || {};
  this._js_beautify = js_beautify2;
  this._css_beautify = css_beautify2;
  this._tag_stack = null;
  var optionHtml = new Options$1(options2, "html");
  this._options = optionHtml;
  this._is_wrap_attributes_force = this._options.wrap_attributes.substr(0, "force".length) === "force";
  this._is_wrap_attributes_force_expand_multiline = this._options.wrap_attributes === "force-expand-multiline";
  this._is_wrap_attributes_force_aligned = this._options.wrap_attributes === "force-aligned";
  this._is_wrap_attributes_aligned_multiple = this._options.wrap_attributes === "aligned-multiple";
  this._is_wrap_attributes_preserve = this._options.wrap_attributes.substr(0, "preserve".length) === "preserve";
  this._is_wrap_attributes_preserve_aligned = this._options.wrap_attributes === "preserve-aligned";
}
Beautifier$1.prototype.beautify = function() {
  if (this._options.disabled) {
    return this._source_text;
  }
  var source_text = this._source_text;
  var eol = this._options.eol;
  if (this._options.eol === "auto") {
    eol = "\n";
    if (source_text && lineBreak.test(source_text)) {
      eol = source_text.match(lineBreak)[0];
    }
  }
  source_text = source_text.replace(allLineBreaks, "\n");
  var baseIndentString = source_text.match(/^[\t ]*/)[0];
  var last_token = {
    text: "",
    type: ""
  };
  var last_tag_token = new TagOpenParserToken();
  var printer = new Printer(this._options, baseIndentString);
  var tokens = new Tokenizer$1(source_text, this._options).tokenize();
  this._tag_stack = new TagStack(printer);
  var parser_token = null;
  var raw_token = tokens.next();
  while (raw_token.type !== TOKEN.EOF) {
    if (raw_token.type === TOKEN.TAG_OPEN || raw_token.type === TOKEN.COMMENT) {
      parser_token = this._handle_tag_open(printer, raw_token, last_tag_token, last_token);
      last_tag_token = parser_token;
    } else if (raw_token.type === TOKEN.ATTRIBUTE || raw_token.type === TOKEN.EQUALS || raw_token.type === TOKEN.VALUE || raw_token.type === TOKEN.TEXT && !last_tag_token.tag_complete) {
      parser_token = this._handle_inside_tag(printer, raw_token, last_tag_token, tokens);
    } else if (raw_token.type === TOKEN.TAG_CLOSE) {
      parser_token = this._handle_tag_close(printer, raw_token, last_tag_token);
    } else if (raw_token.type === TOKEN.TEXT) {
      parser_token = this._handle_text(printer, raw_token, last_tag_token);
    } else {
      printer.add_raw_token(raw_token);
    }
    last_token = parser_token;
    raw_token = tokens.next();
  }
  var sweet_code = printer._output.get_code(eol);
  return sweet_code;
};
Beautifier$1.prototype._handle_tag_close = function(printer, raw_token, last_tag_token) {
  var parser_token = {
    text: raw_token.text,
    type: raw_token.type
  };
  printer.alignment_size = 0;
  last_tag_token.tag_complete = true;
  printer.set_space_before_token(raw_token.newlines || raw_token.whitespace_before !== "", true);
  if (last_tag_token.is_unformatted) {
    printer.add_raw_token(raw_token);
  } else {
    if (last_tag_token.tag_start_char === "<") {
      printer.set_space_before_token(raw_token.text[0] === "/", true);
      if (this._is_wrap_attributes_force_expand_multiline && last_tag_token.has_wrapped_attrs) {
        printer.print_newline(false);
      }
    }
    printer.print_token(raw_token);
  }
  if (last_tag_token.indent_content && !(last_tag_token.is_unformatted || last_tag_token.is_content_unformatted)) {
    printer.indent();
    last_tag_token.indent_content = false;
  }
  if (!last_tag_token.is_inline_element && !(last_tag_token.is_unformatted || last_tag_token.is_content_unformatted)) {
    printer.set_wrap_point();
  }
  return parser_token;
};
Beautifier$1.prototype._handle_inside_tag = function(printer, raw_token, last_tag_token, tokens) {
  var wrapped = last_tag_token.has_wrapped_attrs;
  var parser_token = {
    text: raw_token.text,
    type: raw_token.type
  };
  printer.set_space_before_token(raw_token.newlines || raw_token.whitespace_before !== "", true);
  if (last_tag_token.is_unformatted) {
    printer.add_raw_token(raw_token);
  } else if (last_tag_token.tag_start_char === "{" && raw_token.type === TOKEN.TEXT) {
    if (printer.print_preserved_newlines(raw_token)) {
      raw_token.newlines = 0;
      printer.add_raw_token(raw_token);
    } else {
      printer.print_token(raw_token);
    }
  } else {
    if (raw_token.type === TOKEN.ATTRIBUTE) {
      printer.set_space_before_token(true);
      last_tag_token.attr_count += 1;
    } else if (raw_token.type === TOKEN.EQUALS) {
      printer.set_space_before_token(false);
    } else if (raw_token.type === TOKEN.VALUE && raw_token.previous.type === TOKEN.EQUALS) {
      printer.set_space_before_token(false);
    }
    if (raw_token.type === TOKEN.ATTRIBUTE && last_tag_token.tag_start_char === "<") {
      if (this._is_wrap_attributes_preserve || this._is_wrap_attributes_preserve_aligned) {
        printer.traverse_whitespace(raw_token);
        wrapped = wrapped || raw_token.newlines !== 0;
      }
      if (this._is_wrap_attributes_force) {
        var force_attr_wrap = last_tag_token.attr_count > 1;
        if (this._is_wrap_attributes_force_expand_multiline && last_tag_token.attr_count === 1) {
          var is_only_attribute = true;
          var peek_index = 0;
          var peek_token;
          do {
            peek_token = tokens.peek(peek_index);
            if (peek_token.type === TOKEN.ATTRIBUTE) {
              is_only_attribute = false;
              break;
            }
            peek_index += 1;
          } while (peek_index < 4 && peek_token.type !== TOKEN.EOF && peek_token.type !== TOKEN.TAG_CLOSE);
          force_attr_wrap = !is_only_attribute;
        }
        if (force_attr_wrap) {
          printer.print_newline(false);
          wrapped = true;
        }
      }
    }
    printer.print_token(raw_token);
    wrapped = wrapped || printer.previous_token_wrapped();
    last_tag_token.has_wrapped_attrs = wrapped;
  }
  return parser_token;
};
Beautifier$1.prototype._handle_text = function(printer, raw_token, last_tag_token) {
  var parser_token = {
    text: raw_token.text,
    type: "TK_CONTENT"
  };
  if (last_tag_token.custom_beautifier_name) {
    this._print_custom_beatifier_text(printer, raw_token, last_tag_token);
  } else if (last_tag_token.is_unformatted || last_tag_token.is_content_unformatted) {
    printer.add_raw_token(raw_token);
  } else {
    printer.traverse_whitespace(raw_token);
    printer.print_token(raw_token);
  }
  return parser_token;
};
Beautifier$1.prototype._print_custom_beatifier_text = function(printer, raw_token, last_tag_token) {
  var local = this;
  if (raw_token.text !== "") {
    var text = raw_token.text, _beautifier, script_indent_level = 1, pre = "", post = "";
    if (last_tag_token.custom_beautifier_name === "javascript" && typeof this._js_beautify === "function") {
      _beautifier = this._js_beautify;
    } else if (last_tag_token.custom_beautifier_name === "css" && typeof this._css_beautify === "function") {
      _beautifier = this._css_beautify;
    } else if (last_tag_token.custom_beautifier_name === "html") {
      _beautifier = function(html_source, options2) {
        var beautifier2 = new Beautifier$1(html_source, options2, local._js_beautify, local._css_beautify);
        return beautifier2.beautify();
      };
    }
    if (this._options.indent_scripts === "keep") {
      script_indent_level = 0;
    } else if (this._options.indent_scripts === "separate") {
      script_indent_level = -printer.indent_level;
    }
    var indentation = printer.get_full_indent(script_indent_level);
    text = text.replace(/\n[ \t]*$/, "");
    if (last_tag_token.custom_beautifier_name !== "html" && text[0] === "<" && text.match(/^(<!--|<!\[CDATA\[)/)) {
      var matched = /^(<!--[^\n]*|<!\[CDATA\[)(\n?)([ \t\n]*)([\s\S]*)(-->|]]>)$/.exec(text);
      if (!matched) {
        printer.add_raw_token(raw_token);
        return;
      }
      pre = indentation + matched[1] + "\n";
      text = matched[4];
      if (matched[5]) {
        post = indentation + matched[5];
      }
      text = text.replace(/\n[ \t]*$/, "");
      if (matched[2] || matched[3].indexOf("\n") !== -1) {
        matched = matched[3].match(/[ \t]+$/);
        if (matched) {
          raw_token.whitespace_before = matched[0];
        }
      }
    }
    if (text) {
      if (_beautifier) {
        var Child_options = function() {
          this.eol = "\n";
        };
        Child_options.prototype = this._options.raw_options;
        var child_options = new Child_options();
        text = _beautifier(indentation + text, child_options);
      } else {
        var white = raw_token.whitespace_before;
        if (white) {
          text = text.replace(new RegExp("\n(" + white + ")?", "g"), "\n");
        }
        text = indentation + text.replace(/\n/g, "\n" + indentation);
      }
    }
    if (pre) {
      if (!text) {
        text = pre + post;
      } else {
        text = pre + text + "\n" + post;
      }
    }
    printer.print_newline(false);
    if (text) {
      raw_token.text = text;
      raw_token.whitespace_before = "";
      raw_token.newlines = 0;
      printer.add_raw_token(raw_token);
      printer.print_newline(true);
    }
  }
};
Beautifier$1.prototype._handle_tag_open = function(printer, raw_token, last_tag_token, last_token) {
  var parser_token = this._get_tag_open_token(raw_token);
  if ((last_tag_token.is_unformatted || last_tag_token.is_content_unformatted) && !last_tag_token.is_empty_element && raw_token.type === TOKEN.TAG_OPEN && raw_token.text.indexOf("</") === 0) {
    printer.add_raw_token(raw_token);
    parser_token.start_tag_token = this._tag_stack.try_pop(parser_token.tag_name);
  } else {
    printer.traverse_whitespace(raw_token);
    this._set_tag_position(printer, raw_token, parser_token, last_tag_token, last_token);
    if (!parser_token.is_inline_element) {
      printer.set_wrap_point();
    }
    printer.print_token(raw_token);
  }
  if (this._is_wrap_attributes_force_aligned || this._is_wrap_attributes_aligned_multiple || this._is_wrap_attributes_preserve_aligned) {
    parser_token.alignment_size = raw_token.text.length + 1;
  }
  if (!parser_token.tag_complete && !parser_token.is_unformatted) {
    printer.alignment_size = parser_token.alignment_size;
  }
  return parser_token;
};
var TagOpenParserToken = function(parent, raw_token) {
  this.parent = parent || null;
  this.text = "";
  this.type = "TK_TAG_OPEN";
  this.tag_name = "";
  this.is_inline_element = false;
  this.is_unformatted = false;
  this.is_content_unformatted = false;
  this.is_empty_element = false;
  this.is_start_tag = false;
  this.is_end_tag = false;
  this.indent_content = false;
  this.multiline_content = false;
  this.custom_beautifier_name = null;
  this.start_tag_token = null;
  this.attr_count = 0;
  this.has_wrapped_attrs = false;
  this.alignment_size = 0;
  this.tag_complete = false;
  this.tag_start_char = "";
  this.tag_check = "";
  if (!raw_token) {
    this.tag_complete = true;
  } else {
    var tag_check_match;
    this.tag_start_char = raw_token.text[0];
    this.text = raw_token.text;
    if (this.tag_start_char === "<") {
      tag_check_match = raw_token.text.match(/^<([^\s>]*)/);
      this.tag_check = tag_check_match ? tag_check_match[1] : "";
    } else {
      tag_check_match = raw_token.text.match(/^{{~?(?:[\^]|#\*?)?([^\s}]+)/);
      this.tag_check = tag_check_match ? tag_check_match[1] : "";
      if ((raw_token.text.startsWith("{{#>") || raw_token.text.startsWith("{{~#>")) && this.tag_check[0] === ">") {
        if (this.tag_check === ">" && raw_token.next !== null) {
          this.tag_check = raw_token.next.text.split(" ")[0];
        } else {
          this.tag_check = raw_token.text.split(">")[1];
        }
      }
    }
    this.tag_check = this.tag_check.toLowerCase();
    if (raw_token.type === TOKEN.COMMENT) {
      this.tag_complete = true;
    }
    this.is_start_tag = this.tag_check.charAt(0) !== "/";
    this.tag_name = !this.is_start_tag ? this.tag_check.substr(1) : this.tag_check;
    this.is_end_tag = !this.is_start_tag || raw_token.closed && raw_token.closed.text === "/>";
    var handlebar_starts = 2;
    if (this.tag_start_char === "{" && this.text.length >= 3) {
      if (this.text.charAt(2) === "~") {
        handlebar_starts = 3;
      }
    }
    this.is_end_tag = this.is_end_tag || this.tag_start_char === "{" && (this.text.length < 3 || /[^#\^]/.test(this.text.charAt(handlebar_starts)));
  }
};
Beautifier$1.prototype._get_tag_open_token = function(raw_token) {
  var parser_token = new TagOpenParserToken(this._tag_stack.get_parser_token(), raw_token);
  parser_token.alignment_size = this._options.wrap_attributes_indent_size;
  parser_token.is_end_tag = parser_token.is_end_tag || in_array(parser_token.tag_check, this._options.void_elements);
  parser_token.is_empty_element = parser_token.tag_complete || parser_token.is_start_tag && parser_token.is_end_tag;
  parser_token.is_unformatted = !parser_token.tag_complete && in_array(parser_token.tag_check, this._options.unformatted);
  parser_token.is_content_unformatted = !parser_token.is_empty_element && in_array(parser_token.tag_check, this._options.content_unformatted);
  parser_token.is_inline_element = in_array(parser_token.tag_name, this._options.inline) || parser_token.tag_start_char === "{";
  return parser_token;
};
Beautifier$1.prototype._set_tag_position = function(printer, raw_token, parser_token, last_tag_token, last_token) {
  if (!parser_token.is_empty_element) {
    if (parser_token.is_end_tag) {
      parser_token.start_tag_token = this._tag_stack.try_pop(parser_token.tag_name);
    } else {
      if (this._do_optional_end_element(parser_token)) {
        if (!parser_token.is_inline_element) {
          printer.print_newline(false);
        }
      }
      this._tag_stack.record_tag(parser_token);
      if ((parser_token.tag_name === "script" || parser_token.tag_name === "style") && !(parser_token.is_unformatted || parser_token.is_content_unformatted)) {
        parser_token.custom_beautifier_name = get_custom_beautifier_name(parser_token.tag_check, raw_token);
      }
    }
  }
  if (in_array(parser_token.tag_check, this._options.extra_liners)) {
    printer.print_newline(false);
    if (!printer._output.just_added_blankline()) {
      printer.print_newline(true);
    }
  }
  if (parser_token.is_empty_element) {
    if (parser_token.tag_start_char === "{" && parser_token.tag_check === "else") {
      this._tag_stack.indent_to_tag(["if", "unless", "each"]);
      parser_token.indent_content = true;
      var foundIfOnCurrentLine = printer.current_line_has_match(/{{#if/);
      if (!foundIfOnCurrentLine) {
        printer.print_newline(false);
      }
    }
    if (parser_token.tag_name === "!--" && last_token.type === TOKEN.TAG_CLOSE && last_tag_token.is_end_tag && parser_token.text.indexOf("\n") === -1)
      ;
    else {
      if (!(parser_token.is_inline_element || parser_token.is_unformatted)) {
        printer.print_newline(false);
      }
      this._calcluate_parent_multiline(printer, parser_token);
    }
  } else if (parser_token.is_end_tag) {
    var do_end_expand = false;
    do_end_expand = parser_token.start_tag_token && parser_token.start_tag_token.multiline_content;
    do_end_expand = do_end_expand || !parser_token.is_inline_element && !(last_tag_token.is_inline_element || last_tag_token.is_unformatted) && !(last_token.type === TOKEN.TAG_CLOSE && parser_token.start_tag_token === last_tag_token) && last_token.type !== "TK_CONTENT";
    if (parser_token.is_content_unformatted || parser_token.is_unformatted) {
      do_end_expand = false;
    }
    if (do_end_expand) {
      printer.print_newline(false);
    }
  } else {
    parser_token.indent_content = !parser_token.custom_beautifier_name;
    if (parser_token.tag_start_char === "<") {
      if (parser_token.tag_name === "html") {
        parser_token.indent_content = this._options.indent_inner_html;
      } else if (parser_token.tag_name === "head") {
        parser_token.indent_content = this._options.indent_head_inner_html;
      } else if (parser_token.tag_name === "body") {
        parser_token.indent_content = this._options.indent_body_inner_html;
      }
    }
    if (!(parser_token.is_inline_element || parser_token.is_unformatted) && (last_token.type !== "TK_CONTENT" || parser_token.is_content_unformatted)) {
      printer.print_newline(false);
    }
    this._calcluate_parent_multiline(printer, parser_token);
  }
};
Beautifier$1.prototype._calcluate_parent_multiline = function(printer, parser_token) {
  if (parser_token.parent && printer._output.just_added_newline() && !((parser_token.is_inline_element || parser_token.is_unformatted) && parser_token.parent.is_inline_element)) {
    parser_token.parent.multiline_content = true;
  }
};
var p_closers = ["address", "article", "aside", "blockquote", "details", "div", "dl", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hr", "main", "nav", "ol", "p", "pre", "section", "table", "ul"];
var p_parent_excludes = ["a", "audio", "del", "ins", "map", "noscript", "video"];
Beautifier$1.prototype._do_optional_end_element = function(parser_token) {
  var result = null;
  if (parser_token.is_empty_element || !parser_token.is_start_tag || !parser_token.parent) {
    return;
  }
  if (parser_token.tag_name === "body") {
    result = result || this._tag_stack.try_pop("head");
  } else if (parser_token.tag_name === "li") {
    result = result || this._tag_stack.try_pop("li", ["ol", "ul"]);
  } else if (parser_token.tag_name === "dd" || parser_token.tag_name === "dt") {
    result = result || this._tag_stack.try_pop("dt", ["dl"]);
    result = result || this._tag_stack.try_pop("dd", ["dl"]);
  } else if (parser_token.parent.tag_name === "p" && p_closers.indexOf(parser_token.tag_name) !== -1) {
    var p_parent = parser_token.parent.parent;
    if (!p_parent || p_parent_excludes.indexOf(p_parent.tag_name) === -1) {
      result = result || this._tag_stack.try_pop("p");
    }
  } else if (parser_token.tag_name === "rp" || parser_token.tag_name === "rt") {
    result = result || this._tag_stack.try_pop("rt", ["ruby", "rtc"]);
    result = result || this._tag_stack.try_pop("rp", ["ruby", "rtc"]);
  } else if (parser_token.tag_name === "optgroup") {
    result = result || this._tag_stack.try_pop("optgroup", ["select"]);
  } else if (parser_token.tag_name === "option") {
    result = result || this._tag_stack.try_pop("option", ["select", "datalist", "optgroup"]);
  } else if (parser_token.tag_name === "colgroup") {
    result = result || this._tag_stack.try_pop("caption", ["table"]);
  } else if (parser_token.tag_name === "thead") {
    result = result || this._tag_stack.try_pop("caption", ["table"]);
    result = result || this._tag_stack.try_pop("colgroup", ["table"]);
  } else if (parser_token.tag_name === "tbody" || parser_token.tag_name === "tfoot") {
    result = result || this._tag_stack.try_pop("caption", ["table"]);
    result = result || this._tag_stack.try_pop("colgroup", ["table"]);
    result = result || this._tag_stack.try_pop("thead", ["table"]);
    result = result || this._tag_stack.try_pop("tbody", ["table"]);
  } else if (parser_token.tag_name === "tr") {
    result = result || this._tag_stack.try_pop("caption", ["table"]);
    result = result || this._tag_stack.try_pop("colgroup", ["table"]);
    result = result || this._tag_stack.try_pop("tr", ["table", "thead", "tbody", "tfoot"]);
  } else if (parser_token.tag_name === "th" || parser_token.tag_name === "td") {
    result = result || this._tag_stack.try_pop("td", ["table", "thead", "tbody", "tfoot", "tr"]);
    result = result || this._tag_stack.try_pop("th", ["table", "thead", "tbody", "tfoot", "tr"]);
  }
  parser_token.parent = this._tag_stack.get_parser_token();
  return result;
};
beautifier.Beautifier = Beautifier$1;
var Beautifier = beautifier.Beautifier, Options = options.Options;
function style_html$1(html_source, options2, js_beautify2, css_beautify2) {
  var beautifier2 = new Beautifier(html_source, options2, js_beautify2, css_beautify2);
  return beautifier2.beautify();
}
html.exports = style_html$1;
html.exports.defaultOptions = function() {
  return new Options();
};
var js_beautify = javascript.exports;
var css_beautify = css.exports;
var html_beautify = html.exports;
function style_html(html_source, options2, js2, css2) {
  js2 = js2 || js_beautify;
  css2 = css2 || css_beautify;
  return html_beautify(html_source, options2, js2, css2);
}
style_html.defaultOptions = html_beautify.defaultOptions;
src.js = js_beautify;
src.css = css_beautify;
src.html = style_html;
(function(module) {
  function get_beautify(js_beautify2, css_beautify2, html_beautify2) {
    var beautify = function(src2, config) {
      return js_beautify2.js_beautify(src2, config);
    };
    beautify.js = js_beautify2.js_beautify;
    beautify.css = css_beautify2.css_beautify;
    beautify.html = html_beautify2.html_beautify;
    beautify.js_beautify = js_beautify2.js_beautify;
    beautify.css_beautify = css_beautify2.css_beautify;
    beautify.html_beautify = html_beautify2.html_beautify;
    return beautify;
  }
  {
    (function(mod) {
      var beautifier2 = src;
      beautifier2.js_beautify = beautifier2.js;
      beautifier2.css_beautify = beautifier2.css;
      beautifier2.html_beautify = beautifier2.html;
      mod.exports = get_beautify(beautifier2, beautifier2, beautifier2);
    })(module);
  }
})(js);
const EmailRenderContext = React.createContext({});
const EmailRenderProvider = (props) => {
  return /* @__PURE__ */ React.createElement(EmailRenderContext.Provider, {
    value: props
  }, props.children);
};
function JsonToMjml(options2) {
  const { data, beautify } = options2;
  const block2 = BlockManager.getBlockByType(data.type);
  if (!block2) {
    throw new Error(`Block ${data.type} not found`);
  }
  const mjmlString = unescape$1(renderToStaticMarkup(/* @__PURE__ */ React.createElement(EmailRenderProvider, {
    dataSource: options2.dataSource,
    mode: options2.mode,
    context: options2.context
  }, block2.render(options2))));
  if (beautify) {
    return js.exports.html(mjmlString, { indent_size: 2 });
  }
  return mjmlString;
}
const useEmailRenderContext = () => {
  return useContext(EmailRenderContext);
};
const BlockRenderer = (props) => {
  const { data } = props;
  const { mode, context, dataSource } = useEmailRenderContext();
  const block2 = BlockManager.getBlockByType(data.type);
  if (!block2)
    return null;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, block2.render(__spreadProps(__spreadValues({}, props), { mode, context, dataSource })));
};
function BasicBlock(props) {
  const {
    params,
    params: { data, idx, children: children2, mode },
    tag,
    children
  } = props;
  const placeholder = data.children.length === 0 && getPlaceholder(params);
  let content = children || children2;
  if ((!content || Array.isArray(content) && content.length === 0) && data.children.length === 0) {
    content = placeholder;
  }
  if (mode === "testing" && tag === "mj-image") {
    let url = data.attributes.src;
    if (url === "" || /{{([\s\S]+?)}}/g.test(url) || /\*\|([^\|\*]+)\|\*/g.test(url)) {
      const adapterData = omit(params, "data.attributes.src");
      return /* @__PURE__ */ React.createElement(React.Fragment, null, `<${tag} ${getAdapterAttributesString(adapterData)} src="${getImg("IMAGE_59")}">`, `</${tag}>`);
    }
  }
  return /* @__PURE__ */ React.createElement(React.Fragment, null, `<${tag} ${getAdapterAttributesString(params)}>`, content || data.children.map((child, index2) => /* @__PURE__ */ React.createElement(BlockRenderer, __spreadProps(__spreadValues({
    key: index2
  }, params), {
    idx: idx ? getChildIdx(idx, index2) : null,
    data: child
  }))), `</${tag}>`);
}
const Wrapper$1 = createBlock({
  name: "Wrapper",
  type: BasicType.WRAPPER,
  create: (payload) => {
    const defaultData = {
      type: BasicType.WRAPPER,
      data: {
        value: {}
      },
      attributes: {
        padding: "0px 0px 0px 0px",
        border: "none",
        direction: "ltr",
        "text-align": "center"
      },
      children: []
    };
    return merge(defaultData, payload);
  },
  validParentType: [BasicType.PAGE, BasicType.POD_CUSTOM_PAGE],
  render(params) {
    return /* @__PURE__ */ React.createElement(BasicBlock, {
      params,
      tag: "mj-wrapper"
    });
  }
});
function generaMjmlMetaData(data) {
  const values = data.data.value;
  const attributes = [
    "content-background-color",
    "text-color",
    "font-family",
    "font-size",
    "line-height",
    "font-weight",
    "user-style",
    "responsive"
  ];
  return `
    <mj-html-attributes>
      ${attributes.filter((key) => values[key] !== void 0).map((key) => {
    const attKey = key;
    const isMultipleAttributes = isObject$1(values[attKey]);
    const value = isMultipleAttributes ? Object.keys(values[attKey]).map((childKey) => {
      const childValue = values[attKey][childKey];
      return `${childKey}="${isString$1(childValue) ? childValue.replace(/"/gm, "") : childValue}"`;
    }).join(" ") : `${key}="${values[attKey]}"`;
    return `<mj-html-attribute class="easy-email" multiple-attributes="${isMultipleAttributes}" attribute-name="${key}" ${value}></mj-html-attribute>`;
  }).join("\n")}

    </mj-html-attributes>
  `;
}
const Page$1 = createBlock({
  name: "Page",
  type: BasicType.PAGE,
  create: (payload) => {
    const defaultData = {
      type: BasicType.PAGE,
      data: {
        value: {
          breakpoint: "480px",
          headAttributes: "",
          "font-size": "14px",
          "font-weight": "400",
          "line-height": "1.7",
          headStyles: [],
          fonts: [],
          responsive: true,
          "font-family": "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans','Helvetica Neue', sans-serif",
          "text-color": "#000000"
        }
      },
      attributes: {
        "background-color": "#efeeea",
        width: "600px"
      },
      children: [Wrapper$1.create()]
    };
    return merge(defaultData, payload);
  },
  validParentType: [],
  render(params) {
    var _a, _b;
    const { data } = params;
    const metaData = generaMjmlMetaData(data);
    const value = data.data.value;
    const breakpoint = value.breakpoint ? `<mj-breakpoint width="${data.data.value.breakpoint}" />` : "";
    const nonResponsive = !value.responsive ? `<mj-raw>
            <meta name="viewport" />
           </mj-raw>
           <mj-style inline="inline">.mjml-body { width: ${data.attributes.width || "600px"}; margin: 0px auto; }</mj-style>` : "";
    const styles = ((_a = value.headStyles) == null ? void 0 : _a.map((style) => `<mj-style ${style.inline ? 'inline="inline"' : ""}>${style.content}</mj-style>`).join("\n")) || "";
    const userStyle = value["user-style"] ? `<mj-style ${value["user-style"].inline ? 'inline="inline"' : ""}>${value["user-style"].content}</mj-style>` : "";
    const extraHeadContent = value.extraHeadContent ? `<mj-raw>${value.extraHeadContent}</mj-raw>` : "";
    return /* @__PURE__ */ React.createElement(React.Fragment, null, `
          <mjml>
          <mj-head>
              ${metaData}
              ${nonResponsive}
              ${styles}
              ${userStyle}
              ${breakpoint}
              ${extraHeadContent}
              ${(_b = value.fonts) == null ? void 0 : _b.filter(Boolean).map((item) => `<mj-font name="${item.name}" href="${item.href}" />`)}
            <mj-attributes>
              ${value.headAttributes}
              ${value["font-family"] ? `<mj-all font-family="${value["font-family"].replace(/"/gm, "")}" />` : ""}
              ${value["font-size"] ? `<mj-text font-size="${value["font-size"]}" />` : ""}
              ${value["text-color"] ? `<mj-text color="${value["text-color"]}" />` : ""}
        ${value["line-height"] ? `<mj-text line-height="${value["line-height"]}" />` : ""}
        ${value["font-weight"] ? `<mj-text font-weight="${value["font-weight"]}" />` : ""}
              ${value["content-background-color"] ? `<mj-wrapper background-color="${value["content-background-color"]}" />
             <mj-section background-color="${value["content-background-color"]}" />
            ` : ""}

            </mj-attributes>
          </mj-head>
          <mj-body ${getAdapterAttributesString(params)}>`, data.children.map((child, index2) => /* @__PURE__ */ React.createElement(BlockRenderer, __spreadProps(__spreadValues({}, params), {
      idx: getChildIdx(getPageIdx(), index2),
      key: index2,
      data: child
    }))), "</mj-body></mjml > ");
  }
});
const Section$1 = createBlock({
  name: "Section",
  type: BasicType.SECTION,
  create: (payload) => {
    const defaultData = {
      type: BasicType.SECTION,
      data: {
        value: {
          noWrap: false
        }
      },
      attributes: {
        padding: "0px 0px 0px 0px",
        "background-repeat": "repeat",
        "background-size": "auto",
        "background-position": "top center",
        border: "none",
        direction: "ltr",
        "text-align": "center"
      },
      children: []
    };
    return merge(defaultData, payload);
  },
  validParentType: [BasicType.PAGE, BasicType.POD_CUSTOM_PAGE, BasicType.WRAPPER],
  render(params) {
    return /* @__PURE__ */ React.createElement(BasicBlock, {
      params,
      tag: "mj-section"
    });
  }
});
const Column$1 = createBlock({
  name: "Column",
  type: BasicType.COLUMN,
  create: (payload) => {
    const defaultData = {
      type: BasicType.COLUMN,
      data: {
        value: {}
      },
      attributes: {
        padding: "0px 0px 0px 0px",
        border: "none",
        "vertical-align": "top"
      },
      children: []
    };
    return merge(defaultData, payload);
  },
  validParentType: [BasicType.SECTION, BasicType.GROUP],
  render(params) {
    return /* @__PURE__ */ React.createElement(BasicBlock, {
      params,
      tag: "mj-column"
    });
  }
});
const Text$1 = createBlock({
  name: "Text",
  type: BasicType.TEXT,
  create: (payload) => {
    const defaultData = {
      type: BasicType.TEXT,
      data: {
        value: {
          content: "Make it easy for everyone to compose emails!"
        }
      },
      attributes: {
        padding: "0px 0px 0px 0px",
        align: "left",
        "padding-top": "10px"
      },
      children: []
    };
    return merge(defaultData, payload);
  },
  validParentType: [BasicType.COLUMN, BasicType.HERO],
  render(params) {
    const { data } = params;
    return /* @__PURE__ */ React.createElement(BasicBlock, {
      params,
      tag: "mj-text"
    }, data.data.value.content);
  }
});
const Image$1 = createBlock({
  name: "Image",
  type: BasicType.IMAGE,
  create: (payload) => {
    const defaultData = {
      type: BasicType.IMAGE,
      data: {
        value: {}
      },
      attributes: {
        align: "center",
        height: "auto",
        padding: "10px 25px 10px 25px",
        src: ""
      },
      children: []
    };
    return merge(defaultData, payload);
  },
  validParentType: [BasicType.COLUMN, BasicType.HERO],
  render(params) {
    return /* @__PURE__ */ React.createElement(BasicBlock, {
      params,
      tag: "mj-image"
    });
  }
});
const Group$1 = createBlock({
  name: "Group",
  type: BasicType.GROUP,
  create: (payload) => {
    const defaultData = {
      type: BasicType.GROUP,
      data: {
        value: {}
      },
      attributes: {
        "vertical-align": "top",
        direction: "ltr"
      },
      children: []
    };
    return merge(defaultData, payload);
  },
  validParentType: [BasicType.SECTION],
  render(params) {
    return /* @__PURE__ */ React.createElement(BasicBlock, {
      params,
      tag: "mj-group"
    });
  }
});
const Button$1 = createBlock({
  name: "Button",
  type: BasicType.BUTTON,
  create: (payload) => {
    const defaultData = {
      type: BasicType.BUTTON,
      data: {
        value: {
          content: "Button"
        }
      },
      attributes: {},
      children: []
    };
    return merge(defaultData, payload);
  },
  validParentType: [BasicType.COLUMN, BasicType.HERO],
  render(params) {
    const { data } = params;
    return /* @__PURE__ */ React.createElement(BasicBlock, {
      params,
      tag: "mj-button"
    }, data.data.value.content);
  }
});
const Divider$1 = createBlock({
  name: "Divider",
  type: BasicType.DIVIDER,
  create: (payload) => {
    const defaultData = {
      type: BasicType.DIVIDER,
      data: {
        value: {}
      },
      attributes: {
        align: "center",
        "border-width": "1px",
        "border-style": "solid",
        "border-color": "#C9CCCF",
        padding: "10px 0px 10px 0px"
      },
      children: []
    };
    return merge(defaultData, payload);
  },
  validParentType: [BasicType.COLUMN, BasicType.HERO],
  render(params) {
    return /* @__PURE__ */ React.createElement(BasicBlock, {
      params,
      tag: "mj-divider"
    });
  }
});
const Spacer$1 = createBlock({
  name: "Spacer",
  type: BasicType.SPACER,
  create: (payload) => {
    const defaultData = {
      type: BasicType.SPACER,
      data: {
        value: {}
      },
      attributes: {
        height: "20px"
      },
      children: []
    };
    return merge(defaultData, payload);
  },
  validParentType: [BasicType.COLUMN, BasicType.HERO],
  render(params) {
    return /* @__PURE__ */ React.createElement(BasicBlock, {
      params,
      tag: "mj-spacer"
    });
  }
});
function mergeBlock(a, b) {
  return mergeWith(a, b, (a2, b2) => isArray$1(b2) ? b2 : void 0);
}
const Carousel$1 = createBlock({
  name: "Carousel",
  type: BasicType.CAROUSEL,
  create: (payload) => {
    const defaultData = {
      type: BasicType.CAROUSEL,
      data: {
        value: {
          images: [
            {
              src: getImg("IMAGE_15"),
              target: "_blank"
            },
            {
              src: getImg("IMAGE_16"),
              target: "_blank"
            },
            {
              src: getImg("IMAGE_17"),
              target: "_blank"
            }
          ]
        }
      },
      attributes: {
        align: "center",
        "left-icon": "https://i.imgur.com/xTh3hln.png",
        "right-icon": "https://i.imgur.com/os7o9kz.png",
        "icon-width": "44px",
        thumbnails: "visible"
      },
      children: []
    };
    return mergeBlock(defaultData, payload);
  },
  validParentType: [BasicType.COLUMN],
  render(params) {
    const { data } = params;
    const carouselImages = data.data.value.images.map((image) => {
      const imageAttributeStr = Object.keys(image).filter((key) => key !== "content" && image[key] !== "").map((key) => `${key}="${image[key]}"`).join(" ");
      return `
      <mj-carousel-image ${imageAttributeStr} />
      `;
    }).join("\n");
    return /* @__PURE__ */ React.createElement(BasicBlock, {
      params,
      tag: "mj-carousel"
    }, carouselImages);
  }
});
const Hero$1 = createBlock({
  name: "Hero",
  type: BasicType.HERO,
  create: (payload) => {
    const defaultData = {
      type: BasicType.HERO,
      data: {
        value: {}
      },
      attributes: {
        "background-color": "#ffffff",
        "background-position": "center center",
        mode: "fluid-height",
        padding: "100px 0px 100px 0px",
        "vertical-align": "top",
        "background-url": getImg("IMAGE_31")
      },
      children: [
        {
          type: "text",
          data: {
            value: {
              content: "We Serve Healthy &amp; Delicious Foods"
            }
          },
          attributes: {
            padding: "10px 25px 10px 25px",
            align: "center",
            color: "#ffffff",
            "font-size": "45px",
            "line-height": "45px"
          },
          children: []
        },
        {
          type: "text",
          data: {
            value: {
              content: "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.<br>"
            }
          },
          attributes: {
            align: "center",
            "background-color": "#414141",
            color: "#ffffff",
            "font-weight": "normal",
            "border-radius": "3px",
            padding: "10px 25px 10px 25px",
            "inner-padding": "10px 25px 10px 25px",
            "line-height": "1.5",
            target: "_blank",
            "vertical-align": "middle",
            border: "none",
            "text-align": "center",
            href: "#",
            "font-size": "14px"
          },
          children: []
        },
        {
          type: "button",
          data: {
            value: {
              content: "Get Your Order Here!"
            }
          },
          attributes: {
            align: "center",
            "background-color": "#f3a333",
            color: "#ffffff",
            "font-size": "13px",
            "font-weight": "normal",
            "border-radius": "30px",
            padding: "10px 25px 10px 25px",
            "inner-padding": "10px 25px 10px 25px",
            "line-height": "120%",
            target: "_blank",
            "vertical-align": "middle",
            border: "none",
            "text-align": "center",
            href: "#"
          },
          children: []
        }
      ]
    };
    return mergeBlock(defaultData, payload);
  },
  validParentType: [BasicType.PAGE, BasicType.POD_CUSTOM_PAGE, BasicType.WRAPPER],
  render(params) {
    return /* @__PURE__ */ React.createElement(BasicBlock, {
      params,
      tag: "mj-hero"
    });
  }
});
const Navbar$1 = createBlock({
  name: "Navbar",
  type: BasicType.NAVBAR,
  create: (payload) => {
    const defaultData = {
      type: BasicType.NAVBAR,
      data: {
        value: {
          links: [
            {
              href: "/gettings-started-onboard",
              content: "Getting started",
              color: "#1890ff",
              "font-size": "13px",
              target: "_blank",
              padding: "15px 10px"
            },
            {
              href: "/try-it-live",
              content: "Try it live",
              color: "#1890ff",
              "font-size": "13px",
              target: "_blank",
              padding: "15px 10px"
            },
            {
              href: "/templates",
              content: "Templates",
              color: "#1890ff",
              "font-size": "13px",
              target: "_blank",
              padding: "15px 10px"
            },
            {
              href: "/components",
              content: "Components",
              color: "#1890ff",
              "font-size": "13px",
              target: "_blank",
              padding: "15px 10px"
            }
          ]
        }
      },
      attributes: {
        align: "center"
      },
      children: []
    };
    return mergeBlock(defaultData, payload);
  },
  validParentType: [BasicType.COLUMN, BasicType.HERO],
  render(params) {
    const { data } = params;
    const links = data.data.value.links.map((link, index2) => {
      const linkAttributeStr = Object.keys(link).filter((key) => key !== "content" && link[key] !== "").map((key) => `${key}="${link[key]}"`).join(" ");
      return `
          <mj-navbar-link ${linkAttributeStr}>${link.content}</mj-navbar-link>
          `;
    }).join("\n");
    return /* @__PURE__ */ React.createElement(BasicBlock, {
      params,
      tag: "mj-navbar"
    }, links);
  }
});
const Social$1 = createBlock({
  name: "Social",
  type: BasicType.SOCIAL,
  create: (payload) => {
    const defaultData = {
      type: BasicType.SOCIAL,
      data: {
        value: {
          elements: [
            {
              href: "#",
              target: "_blank",
              src: getImg("IMAGE_02"),
              content: "Facebook"
            },
            {
              href: "#",
              target: "_blank",
              src: getImg("IMAGE_03"),
              content: "Google"
            },
            {
              href: "",
              target: "_blank",
              src: getImg("IMAGE_04"),
              content: "Twitter"
            }
          ]
        }
      },
      attributes: {
        align: "center",
        color: "#333333",
        mode: "horizontal",
        "font-size": "13px",
        "font-weight": "normal",
        "border-radius": "3px",
        padding: "10px 25px 10px 25px",
        "inner-padding": "4px 4px 4px 4px",
        "line-height": "22px",
        "text-padding": "4px 4px 4px 0px",
        "icon-padding": "0px",
        "icon-size": "20px"
      },
      children: []
    };
    return mergeBlock(defaultData, payload);
  },
  validParentType: [BasicType.COLUMN],
  render(params) {
    const { data } = params;
    const elements = data.data.value.elements.map((element) => {
      const elementAttributeStr = Object.keys(element).filter((key) => key !== "content" && element[key] !== "").map((key) => `${key}="${element[key]}"`).join(" ");
      return `
          <mj-social-element ${elementAttributeStr}>${element.content}</mj-social-element>
          `;
    }).join("\n");
    return /* @__PURE__ */ React.createElement(BasicBlock, {
      params,
      tag: "mj-social"
    }, elements);
  }
});
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var __assign = function() {
  __assign = Object.assign || function __assign2(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve2) {
      resolve2(value);
    });
  }
  return new (P || (P = Promise))(function(resolve2, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve2(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}
class Drop {
  liquidMethodMissing(key) {
    return void 0;
  }
}
const toString$1 = Object.prototype.toString;
const toLowerCase = String.prototype.toLowerCase;
const hasOwnProperty = Object.hasOwnProperty;
function isString(value) {
  return typeof value === "string";
}
function isFunction(value) {
  return typeof value === "function";
}
function isPromise(val) {
  return val && isFunction(val.then);
}
function isIterator(val) {
  return val && isFunction(val.next) && isFunction(val.throw) && isFunction(val.return);
}
function escapeRegex(str) {
  return str.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&");
}
function stringify(value) {
  value = toValue(value);
  if (isString(value))
    return value;
  if (isNil(value))
    return "";
  if (isArray(value))
    return value.map((x) => stringify(x)).join("");
  return String(value);
}
function toValue(value) {
  return value instanceof Drop && isFunction(value.valueOf) ? value.valueOf() : value;
}
function isNumber(value) {
  return typeof value === "number";
}
function toLiquid(value) {
  if (value && isFunction(value.toLiquid))
    return toLiquid(value.toLiquid());
  return value;
}
function isNil(value) {
  return value == null;
}
function isArray(value) {
  return toString$1.call(value) === "[object Array]";
}
function isIterable(value) {
  return isObject(value) && Symbol.iterator in value;
}
function forOwn(obj, iteratee) {
  obj = obj || {};
  for (const k in obj) {
    if (hasOwnProperty.call(obj, k)) {
      if (iteratee(obj[k], k, obj) === false)
        break;
    }
  }
  return obj;
}
function last$1(arr) {
  return arr[arr.length - 1];
}
function isObject(value) {
  const type = typeof value;
  return value !== null && (type === "object" || type === "function");
}
function range(start, stop, step = 1) {
  const arr = [];
  for (let i = start; i < stop; i += step) {
    arr.push(i);
  }
  return arr;
}
function padStart(str, length, ch = " ") {
  return pad(str, length, ch, (str2, ch2) => ch2 + str2);
}
function padEnd(str, length, ch = " ") {
  return pad(str, length, ch, (str2, ch2) => str2 + ch2);
}
function pad(str, length, ch, add) {
  str = String(str);
  let n = length - str.length;
  while (n-- > 0)
    str = add(str, ch);
  return str;
}
function identify(val) {
  return val;
}
function snakeCase(str) {
  return str.replace(/(\w?)([A-Z])/g, (_, a, b) => (a ? a + "_" : "") + b.toLowerCase());
}
function changeCase(str) {
  const hasLowerCase = [...str].some((ch) => ch >= "a" && ch <= "z");
  return hasLowerCase ? str.toUpperCase() : str.toLowerCase();
}
function ellipsis(str, N) {
  return str.length > N ? str.substr(0, N - 3) + "..." : str;
}
function caseInsensitiveCompare(a, b) {
  if (a == null && b == null)
    return 0;
  if (a == null)
    return 1;
  if (b == null)
    return -1;
  a = toLowerCase.call(a);
  b = toLowerCase.call(b);
  if (a < b)
    return -1;
  if (a > b)
    return 1;
  return 0;
}
function argumentsToValue(fn) {
  return (...args) => fn(...args.map(toValue));
}
function escapeRegExp(text) {
  return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
}
class Node {
  constructor(key, value, next, prev) {
    this.key = key;
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}
class LRU {
  constructor(limit2, size2 = 0) {
    this.limit = limit2;
    this.size = size2;
    this.cache = {};
    this.head = new Node("HEAD", null, null, null);
    this.tail = new Node("TAIL", null, null, null);
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }
  write(key, value) {
    if (this.cache[key]) {
      this.cache[key].value = value;
    } else {
      const node = new Node(key, value, this.head.next, this.head);
      this.head.next.prev = node;
      this.head.next = node;
      this.cache[key] = node;
      this.size++;
      this.ensureLimit();
    }
  }
  read(key) {
    if (!this.cache[key])
      return;
    const { value } = this.cache[key];
    this.remove(key);
    this.write(key, value);
    return value;
  }
  remove(key) {
    const node = this.cache[key];
    node.prev.next = node.next;
    node.next.prev = node.prev;
    delete this.cache[key];
    this.size--;
  }
  clear() {
    this.head.next = this.tail;
    this.tail.prev = this.head;
    this.size = 0;
    this.cache = {};
  }
  ensureLimit() {
    if (this.size > this.limit)
      this.remove(this.tail.prev.key);
  }
}
function domResolve(root, path) {
  const base = document.createElement("base");
  base.href = root;
  const head = document.getElementsByTagName("head")[0];
  head.insertBefore(base, head.firstChild);
  const a = document.createElement("a");
  a.href = path;
  const resolved = a.href;
  head.removeChild(base);
  return resolved;
}
function resolve(root, filepath, ext) {
  if (root.length && last$1(root) !== "/")
    root += "/";
  const url = domResolve(root, filepath);
  return url.replace(/^(\w+:\/\/[^/]+)(\/[^?]+)/, (str, origin, path) => {
    const last2 = path.split("/").pop();
    if (/\.\w+$/.test(last2))
      return str;
    return origin + path + ext;
  });
}
function readFile(url) {
  return __awaiter(this, void 0, void 0, function* () {
    return new Promise((resolve2, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.onload = () => {
        if (xhr.status >= 200 && xhr.status < 300) {
          resolve2(xhr.responseText);
        } else {
          reject(new Error(xhr.statusText));
        }
      };
      xhr.onerror = () => {
        reject(new Error("An error occurred whilst receiving the response."));
      };
      xhr.open("GET", url);
      xhr.send();
    });
  });
}
function readFileSync(url) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url, false);
  xhr.send();
  if (xhr.status < 200 || xhr.status >= 300) {
    throw new Error(xhr.statusText);
  }
  return xhr.responseText;
}
function exists(filepath) {
  return __awaiter(this, void 0, void 0, function* () {
    return true;
  });
}
function existsSync(filepath) {
  return true;
}
function dirname(filepath) {
  return domResolve(filepath, ".");
}
const sep = "/";
var fs = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  resolve,
  readFile,
  readFileSync,
  exists,
  existsSync,
  dirname,
  sep
});
function isComparable(arg) {
  return arg && isFunction(arg.equals);
}
function isTruthy(val, ctx) {
  return !isFalsy(val, ctx);
}
function isFalsy(val, ctx) {
  if (ctx.opts.jsTruthy) {
    return !val;
  } else {
    return val === false || val === void 0 || val === null;
  }
}
const defaultOperators = {
  "==": (l, r) => {
    if (isComparable(l))
      return l.equals(r);
    if (isComparable(r))
      return r.equals(l);
    return toValue(l) === toValue(r);
  },
  "!=": (l, r) => {
    if (isComparable(l))
      return !l.equals(r);
    if (isComparable(r))
      return !r.equals(l);
    return toValue(l) !== toValue(r);
  },
  ">": (l, r) => {
    if (isComparable(l))
      return l.gt(r);
    if (isComparable(r))
      return r.lt(l);
    return toValue(l) > toValue(r);
  },
  "<": (l, r) => {
    if (isComparable(l))
      return l.lt(r);
    if (isComparable(r))
      return r.gt(l);
    return toValue(l) < toValue(r);
  },
  ">=": (l, r) => {
    if (isComparable(l))
      return l.geq(r);
    if (isComparable(r))
      return r.leq(l);
    return toValue(l) >= toValue(r);
  },
  "<=": (l, r) => {
    if (isComparable(l))
      return l.leq(r);
    if (isComparable(r))
      return r.geq(l);
    return toValue(l) <= toValue(r);
  },
  "contains": (l, r) => {
    l = toValue(l);
    r = toValue(r);
    return l && isFunction(l.indexOf) ? l.indexOf(r) > -1 : false;
  },
  "and": (l, r, ctx) => isTruthy(toValue(l), ctx) && isTruthy(toValue(r), ctx),
  "or": (l, r, ctx) => isTruthy(toValue(l), ctx) || isTruthy(toValue(r), ctx)
};
const TYPES = [0, 0, 0, 0, 0, 0, 0, 0, 0, 20, 4, 4, 4, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 20, 2, 8, 0, 0, 0, 0, 8, 0, 0, 0, 64, 0, 65, 0, 0, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 0, 0, 2, 2, 2, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0];
const IDENTIFIER = 1;
const BLANK = 4;
const QUOTE = 8;
const INLINE_BLANK = 16;
const NUMBER = 32;
const SIGN = 64;
TYPES[160] = TYPES[5760] = TYPES[6158] = TYPES[8192] = TYPES[8193] = TYPES[8194] = TYPES[8195] = TYPES[8196] = TYPES[8197] = TYPES[8198] = TYPES[8199] = TYPES[8200] = TYPES[8201] = TYPES[8202] = TYPES[8232] = TYPES[8233] = TYPES[8239] = TYPES[8287] = TYPES[12288] = BLANK;
function createTrie(operators) {
  const trie = {};
  for (const [name, handler] of Object.entries(operators)) {
    let node = trie;
    for (let i = 0; i < name.length; i++) {
      const c = name[i];
      node[c] = node[c] || {};
      if (i === name.length - 1 && TYPES[name.charCodeAt(i)] & IDENTIFIER) {
        node[c].needBoundary = true;
      }
      node = node[c];
    }
    node.handler = handler;
    node.end = true;
  }
  return trie;
}
const escapeMap = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&#34;",
  "'": "&#39;"
};
const unescapeMap = {
  "&amp;": "&",
  "&lt;": "<",
  "&gt;": ">",
  "&#34;": '"',
  "&#39;": "'"
};
function escape(str) {
  return stringify(str).replace(/&|<|>|"|'/g, (m) => escapeMap[m]);
}
function unescape(str) {
  return stringify(str).replace(/&(amp|lt|gt|#34|#39);/g, (m) => unescapeMap[m]);
}
function escapeOnce(str) {
  return escape(unescape(stringify(str)));
}
function newlineToBr(v) {
  return stringify(v).replace(/\n/g, "<br />\n");
}
function stripHtml(v) {
  return stringify(v).replace(/<script.*?<\/script>|<!--.*?-->|<style.*?<\/style>|<.*?>/g, "");
}
const abs = argumentsToValue(Math.abs);
const atLeast = argumentsToValue(Math.max);
const atMost = argumentsToValue(Math.min);
const ceil = argumentsToValue(Math.ceil);
const dividedBy = argumentsToValue((dividend, divisor, integerArithmetic = false) => integerArithmetic ? Math.floor(dividend / divisor) : dividend / divisor);
const floor = argumentsToValue(Math.floor);
const minus = argumentsToValue((v, arg) => v - arg);
const modulo = argumentsToValue((v, arg) => v % arg);
const times = argumentsToValue((v, arg) => v * arg);
function round(v, arg = 0) {
  v = toValue(v);
  arg = toValue(arg);
  const amp = Math.pow(10, arg);
  return Math.round(v * amp) / amp;
}
function plus(v, arg) {
  v = toValue(v);
  arg = toValue(arg);
  return Number(v) + Number(arg);
}
const urlDecode = (x) => stringify(x).split("+").map(decodeURIComponent).join(" ");
const urlEncode = (x) => stringify(x).split(" ").map(encodeURIComponent).join("+");
function toEnumerable(val) {
  val = toValue(val);
  if (isArray(val))
    return val;
  if (isString(val) && val.length > 0)
    return [val];
  if (isIterable(val))
    return Array.from(val);
  if (isObject(val))
    return Object.keys(val).map((key) => [key, val[key]]);
  return [];
}
function toArray(val) {
  if (isNil(val))
    return [];
  if (isArray(val))
    return val;
  return [val];
}
const join = argumentsToValue((v, arg) => toArray(v).join(arg === void 0 ? " " : arg));
const last = argumentsToValue((v) => isArray(v) ? last$1(v) : "");
const first = argumentsToValue((v) => isArray(v) ? v[0] : "");
const reverse = argumentsToValue((v) => [...toArray(v)].reverse());
function sort(arr, property) {
  arr = toValue(arr);
  const getValue = (obj) => property ? this.context.getFromScope(obj, stringify(property).split(".")) : obj;
  return [...toArray(arr)].sort((lhs, rhs) => {
    lhs = getValue(lhs);
    rhs = getValue(rhs);
    return lhs < rhs ? -1 : lhs > rhs ? 1 : 0;
  });
}
function sortNatural(input, property) {
  input = toValue(input);
  const propertyString = stringify(property);
  const compare = property === void 0 ? caseInsensitiveCompare : (lhs, rhs) => caseInsensitiveCompare(lhs[propertyString], rhs[propertyString]);
  return [...toArray(input)].sort(compare);
}
const size = (v) => v && v.length || 0;
function map(arr, property) {
  arr = toValue(arr);
  return toArray(arr).map((obj) => this.context.getFromScope(obj, stringify(property).split(".")));
}
function compact(arr) {
  arr = toValue(arr);
  return toArray(arr).filter((x) => !isNil(toValue(x)));
}
function concat(v, arg = []) {
  v = toValue(v);
  arg = toArray(arg).map((v2) => toValue(v2));
  return toArray(v).concat(arg);
}
function slice(v, begin, length = 1) {
  v = toValue(v);
  if (isNil(v))
    return [];
  if (!isArray(v))
    v = stringify(v);
  begin = begin < 0 ? v.length + begin : begin;
  return v.slice(begin, begin + length);
}
function where(arr, property, expected) {
  arr = toValue(arr);
  return toArray(arr).filter((obj) => {
    const value = this.context.getFromScope(obj, stringify(property).split("."));
    if (expected === void 0)
      return isTruthy(value, this.context);
    if (isComparable(expected))
      return expected.equals(value);
    return value === expected;
  });
}
function uniq(arr) {
  arr = toValue(arr);
  const u = {};
  return (arr || []).filter((val) => {
    if (hasOwnProperty.call(u, String(val)))
      return false;
    u[String(val)] = true;
    return true;
  });
}
const rFormat = /%([-_0^#:]+)?(\d+)?([EO])?(.)/;
const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
const dayNames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
const monthNamesShort = monthNames.map(abbr);
const dayNamesShort = dayNames.map(abbr);
const suffixes = {
  1: "st",
  2: "nd",
  3: "rd",
  "default": "th"
};
function abbr(str) {
  return str.slice(0, 3);
}
function daysInMonth(d) {
  const feb = isLeapYear(d) ? 29 : 28;
  return [31, feb, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
}
function getDayOfYear(d) {
  let num = 0;
  for (let i = 0; i < d.getMonth(); ++i) {
    num += daysInMonth(d)[i];
  }
  return num + d.getDate();
}
function getWeekOfYear(d, startDay) {
  const now = getDayOfYear(d) + (startDay - d.getDay());
  const jan1 = new Date(d.getFullYear(), 0, 1);
  const then = 7 - jan1.getDay() + startDay;
  return String(Math.floor((now - then) / 7) + 1);
}
function isLeapYear(d) {
  const year = d.getFullYear();
  return !!((year & 3) === 0 && (year % 100 || year % 400 === 0 && year));
}
function getSuffix(d) {
  const str = d.getDate().toString();
  const index2 = parseInt(str.slice(-1));
  return suffixes[index2] || suffixes["default"];
}
function century(d) {
  return parseInt(d.getFullYear().toString().substring(0, 2), 10);
}
const padWidths = {
  d: 2,
  e: 2,
  H: 2,
  I: 2,
  j: 3,
  k: 2,
  l: 2,
  L: 3,
  m: 2,
  M: 2,
  S: 2,
  U: 2,
  W: 2
};
const padChars = {
  a: " ",
  A: " ",
  b: " ",
  B: " ",
  c: " ",
  e: " ",
  k: " ",
  l: " ",
  p: " ",
  P: " "
};
const formatCodes = {
  a: (d) => dayNamesShort[d.getDay()],
  A: (d) => dayNames[d.getDay()],
  b: (d) => monthNamesShort[d.getMonth()],
  B: (d) => monthNames[d.getMonth()],
  c: (d) => d.toLocaleString(),
  C: (d) => century(d),
  d: (d) => d.getDate(),
  e: (d) => d.getDate(),
  H: (d) => d.getHours(),
  I: (d) => String(d.getHours() % 12 || 12),
  j: (d) => getDayOfYear(d),
  k: (d) => d.getHours(),
  l: (d) => String(d.getHours() % 12 || 12),
  L: (d) => d.getMilliseconds(),
  m: (d) => d.getMonth() + 1,
  M: (d) => d.getMinutes(),
  N: (d, opts) => {
    const width = Number(opts.width) || 9;
    const str = String(d.getMilliseconds()).substr(0, width);
    return padEnd(str, width, "0");
  },
  p: (d) => d.getHours() < 12 ? "AM" : "PM",
  P: (d) => d.getHours() < 12 ? "am" : "pm",
  q: (d) => getSuffix(d),
  s: (d) => Math.round(d.getTime() / 1e3),
  S: (d) => d.getSeconds(),
  u: (d) => d.getDay() || 7,
  U: (d) => getWeekOfYear(d, 0),
  w: (d) => d.getDay(),
  W: (d) => getWeekOfYear(d, 1),
  x: (d) => d.toLocaleDateString(),
  X: (d) => d.toLocaleTimeString(),
  y: (d) => d.getFullYear().toString().substring(2, 4),
  Y: (d) => d.getFullYear(),
  z: (d, opts) => {
    const nOffset = Math.abs(d.getTimezoneOffset());
    const h = Math.floor(nOffset / 60);
    const m = nOffset % 60;
    return (d.getTimezoneOffset() > 0 ? "-" : "+") + padStart(h, 2, "0") + (opts.flags[":"] ? ":" : "") + padStart(m, 2, "0");
  },
  "t": () => "	",
  "n": () => "\n",
  "%": () => "%"
};
formatCodes.h = formatCodes.b;
function strftime(d, formatStr) {
  let output2 = "";
  let remaining = formatStr;
  let match;
  while (match = rFormat.exec(remaining)) {
    output2 += remaining.slice(0, match.index);
    remaining = remaining.slice(match.index + match[0].length);
    output2 += format(d, match);
  }
  return output2 + remaining;
}
function format(d, match) {
  const [input, flagStr = "", width, modifier, conversion] = match;
  const convert = formatCodes[conversion];
  if (!convert)
    return input;
  const flags = {};
  for (const flag of flagStr)
    flags[flag] = true;
  let ret = String(convert(d, { flags, width, modifier }));
  let padChar = padChars[conversion] || "0";
  let padWidth = width || padWidths[conversion] || 0;
  if (flags["^"])
    ret = ret.toUpperCase();
  else if (flags["#"])
    ret = changeCase(ret);
  if (flags["_"])
    padChar = " ";
  else if (flags["0"])
    padChar = "0";
  if (flags["-"])
    padWidth = 0;
  return padStart(ret, padWidth, padChar);
}
const OneMinute = 6e4;
const hostTimezoneOffset = new Date().getTimezoneOffset();
const ISO8601_TIMEZONE_PATTERN = /([zZ]|([+-])(\d{2}):(\d{2}))$/;
class TimezoneDate {
  constructor(init, timezoneOffset) {
    if (init instanceof TimezoneDate) {
      this.date = init.date;
      timezoneOffset = init.timezoneOffset;
    } else {
      const diff = (hostTimezoneOffset - timezoneOffset) * OneMinute;
      const time = new Date(init).getTime() + diff;
      this.date = new Date(time);
    }
    this.timezoneOffset = timezoneOffset;
  }
  getTime() {
    return this.date.getTime();
  }
  getMilliseconds() {
    return this.date.getMilliseconds();
  }
  getSeconds() {
    return this.date.getSeconds();
  }
  getMinutes() {
    return this.date.getMinutes();
  }
  getHours() {
    return this.date.getHours();
  }
  getDay() {
    return this.date.getDay();
  }
  getDate() {
    return this.date.getDate();
  }
  getMonth() {
    return this.date.getMonth();
  }
  getFullYear() {
    return this.date.getFullYear();
  }
  toLocaleTimeString(locale) {
    return this.date.toLocaleTimeString(locale);
  }
  toLocaleDateString(locale) {
    return this.date.toLocaleDateString(locale);
  }
  getTimezoneOffset() {
    return this.timezoneOffset;
  }
  static createDateFixedToTimezone(dateString) {
    const m = dateString.match(ISO8601_TIMEZONE_PATTERN);
    if (m && m[1] === "Z") {
      return new TimezoneDate(+new Date(dateString), 0);
    }
    if (m && m[2] && m[3] && m[4]) {
      const [, , sign, hours, minutes] = m;
      const delta = (sign === "+" ? -1 : 1) * (parseInt(hours, 10) * 60 + parseInt(minutes, 10));
      return new TimezoneDate(+new Date(dateString), delta);
    }
    return new Date(dateString);
  }
}
function date(v, arg) {
  const opts = this.context.opts;
  let date2;
  v = toValue(v);
  arg = stringify(arg);
  if (v === "now" || v === "today") {
    date2 = new Date();
  } else if (isNumber(v)) {
    date2 = new Date(v * 1e3);
  } else if (isString(v)) {
    if (/^\d+$/.test(v)) {
      date2 = new Date(+v * 1e3);
    } else if (opts.preserveTimezones) {
      date2 = TimezoneDate.createDateFixedToTimezone(v);
    } else {
      date2 = new Date(v);
    }
  } else {
    date2 = v;
  }
  if (!isValidDate(date2))
    return v;
  if (opts.hasOwnProperty("timezoneOffset")) {
    date2 = new TimezoneDate(date2, opts.timezoneOffset);
  }
  return strftime(date2, arg);
}
function isValidDate(date2) {
  return (date2 instanceof Date || date2 instanceof TimezoneDate) && !isNaN(date2.getTime());
}
function Default(value, defaultValue, ...args) {
  value = toValue(value);
  if (isArray(value) || isString(value))
    return value.length ? value : defaultValue;
  if (value === false && new Map(args).get("allow_false"))
    return false;
  return isFalsy(value, this.context) ? defaultValue : value;
}
function json(value) {
  return JSON.stringify(value);
}
const raw$1 = identify;
class LiquidError extends Error {
  constructor(err, token2) {
    super(err.message);
    this.originalError = err;
    this.token = token2;
    this.context = "";
  }
  update() {
    const err = this.originalError;
    this.context = mkContext(this.token);
    this.message = mkMessage(err.message, this.token);
    this.stack = this.message + "\n" + this.context + "\n" + this.stack + "\nFrom " + err.stack;
  }
}
class TokenizationError extends LiquidError {
  constructor(message, token2) {
    super(new Error(message), token2);
    this.name = "TokenizationError";
    super.update();
  }
}
class ParseError extends LiquidError {
  constructor(err, token2) {
    super(err, token2);
    this.name = "ParseError";
    this.message = err.message;
    super.update();
  }
}
class RenderError extends LiquidError {
  constructor(err, tpl) {
    super(err, tpl.token);
    this.name = "RenderError";
    this.message = err.message;
    super.update();
  }
  static is(obj) {
    return obj.name === "RenderError";
  }
}
class UndefinedVariableError extends LiquidError {
  constructor(err, token2) {
    super(err, token2);
    this.name = "UndefinedVariableError";
    this.message = err.message;
    super.update();
  }
}
class InternalUndefinedVariableError extends Error {
  constructor(variableName) {
    super(`undefined variable: ${variableName}`);
    this.name = "InternalUndefinedVariableError";
    this.variableName = variableName;
  }
}
class AssertionError extends Error {
  constructor(message) {
    super(message);
    this.name = "AssertionError";
    this.message = message + "";
  }
}
function mkContext(token2) {
  const [line] = token2.getPosition();
  const lines = token2.input.split("\n");
  const begin = Math.max(line - 2, 1);
  const end = Math.min(line + 3, lines.length);
  const context = range(begin, end + 1).map((lineNumber) => {
    const indicator = lineNumber === line ? ">> " : "   ";
    const num = padStart(String(lineNumber), String(end).length);
    const text = lines[lineNumber - 1];
    return `${indicator}${num}| ${text}`;
  }).join("\n");
  return context;
}
function mkMessage(msg, token2) {
  if (token2.file)
    msg += `, file:${token2.file}`;
  const [line, col] = token2.getPosition();
  msg += `, line:${line}, col:${col}`;
  return msg;
}
function assert(predicate, message) {
  if (!predicate) {
    const msg = typeof message === "function" ? message() : message || `expect ${predicate} to be true`;
    throw new AssertionError(msg);
  }
}
function append(v, arg) {
  assert(arguments.length === 2, "append expect 2 arguments");
  return stringify(v) + stringify(arg);
}
function prepend(v, arg) {
  assert(arguments.length === 2, "prepend expect 2 arguments");
  return stringify(arg) + stringify(v);
}
function lstrip(v, chars) {
  if (chars) {
    chars = escapeRegExp(stringify(chars));
    return stringify(v).replace(new RegExp(`^[${chars}]+`, "g"), "");
  }
  return stringify(v).replace(/^\s+/, "");
}
function downcase(v) {
  return stringify(v).toLowerCase();
}
function upcase(str) {
  return stringify(str).toUpperCase();
}
function remove(v, arg) {
  return stringify(v).split(String(arg)).join("");
}
function removeFirst(v, l) {
  return stringify(v).replace(String(l), "");
}
function rstrip(str, chars) {
  if (chars) {
    chars = escapeRegExp(stringify(chars));
    return stringify(str).replace(new RegExp(`[${chars}]+$`, "g"), "");
  }
  return stringify(str).replace(/\s+$/, "");
}
function split(v, arg) {
  const arr = stringify(v).split(String(arg));
  while (arr.length && arr[arr.length - 1] === "")
    arr.pop();
  return arr;
}
function strip(v, chars) {
  if (chars) {
    chars = escapeRegExp(stringify(chars));
    return stringify(v).replace(new RegExp(`^[${chars}]+`, "g"), "").replace(new RegExp(`[${chars}]+$`, "g"), "");
  }
  return stringify(v).trim();
}
function stripNewlines(v) {
  return stringify(v).replace(/\n/g, "");
}
function capitalize(str) {
  str = stringify(str);
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}
function replace(v, pattern2, replacement) {
  return stringify(v).split(String(pattern2)).join(replacement);
}
function replaceFirst(v, arg1, arg2) {
  return stringify(v).replace(String(arg1), arg2);
}
function truncate(v, l = 50, o = "...") {
  v = stringify(v);
  if (v.length <= l)
    return v;
  return v.substring(0, l - o.length) + o;
}
function truncatewords(v, l = 15, o = "...") {
  const arr = stringify(v).split(/\s+/);
  let ret = arr.slice(0, l).join(" ");
  if (arr.length >= l)
    ret += o;
  return ret;
}
var builtinFilters = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  escape,
  escapeOnce,
  newlineToBr,
  stripHtml,
  abs,
  atLeast,
  atMost,
  ceil,
  dividedBy,
  floor,
  minus,
  modulo,
  times,
  round,
  plus,
  urlDecode,
  urlEncode,
  join,
  last,
  first,
  reverse,
  sort,
  sortNatural,
  size,
  map,
  compact,
  concat,
  slice,
  where,
  uniq,
  date,
  Default,
  json,
  raw: raw$1,
  append,
  prepend,
  lstrip,
  downcase,
  upcase,
  remove,
  removeFirst,
  rstrip,
  split,
  strip,
  stripNewlines,
  capitalize,
  replace,
  replaceFirst,
  truncate,
  truncatewords
});
var TokenKind;
(function(TokenKind2) {
  TokenKind2[TokenKind2["Number"] = 1] = "Number";
  TokenKind2[TokenKind2["Literal"] = 2] = "Literal";
  TokenKind2[TokenKind2["Tag"] = 4] = "Tag";
  TokenKind2[TokenKind2["Output"] = 8] = "Output";
  TokenKind2[TokenKind2["HTML"] = 16] = "HTML";
  TokenKind2[TokenKind2["Filter"] = 32] = "Filter";
  TokenKind2[TokenKind2["Hash"] = 64] = "Hash";
  TokenKind2[TokenKind2["PropertyAccess"] = 128] = "PropertyAccess";
  TokenKind2[TokenKind2["Word"] = 256] = "Word";
  TokenKind2[TokenKind2["Range"] = 512] = "Range";
  TokenKind2[TokenKind2["Quoted"] = 1024] = "Quoted";
  TokenKind2[TokenKind2["Operator"] = 2048] = "Operator";
  TokenKind2[TokenKind2["Delimited"] = 12] = "Delimited";
})(TokenKind || (TokenKind = {}));
function isDelimitedToken(val) {
  return !!(getKind(val) & TokenKind.Delimited);
}
function isOperatorToken(val) {
  return getKind(val) === TokenKind.Operator;
}
function isHTMLToken(val) {
  return getKind(val) === TokenKind.HTML;
}
function isOutputToken(val) {
  return getKind(val) === TokenKind.Output;
}
function isTagToken(val) {
  return getKind(val) === TokenKind.Tag;
}
function isQuotedToken(val) {
  return getKind(val) === TokenKind.Quoted;
}
function isLiteralToken(val) {
  return getKind(val) === TokenKind.Literal;
}
function isNumberToken(val) {
  return getKind(val) === TokenKind.Number;
}
function isPropertyAccessToken(val) {
  return getKind(val) === TokenKind.PropertyAccess;
}
function isWordToken(val) {
  return getKind(val) === TokenKind.Word;
}
function isRangeToken(val) {
  return getKind(val) === TokenKind.Range;
}
function getKind(val) {
  return val ? val.kind : -1;
}
class NullDrop extends Drop {
  equals(value) {
    return isNil(toValue(value));
  }
  gt() {
    return false;
  }
  geq() {
    return false;
  }
  lt() {
    return false;
  }
  leq() {
    return false;
  }
  valueOf() {
    return null;
  }
}
class EmptyDrop extends Drop {
  equals(value) {
    if (value instanceof EmptyDrop)
      return false;
    value = toValue(value);
    if (isString(value) || isArray(value))
      return value.length === 0;
    if (isObject(value))
      return Object.keys(value).length === 0;
    return false;
  }
  gt() {
    return false;
  }
  geq() {
    return false;
  }
  lt() {
    return false;
  }
  leq() {
    return false;
  }
  valueOf() {
    return "";
  }
}
class BlankDrop extends EmptyDrop {
  equals(value) {
    if (value === false)
      return true;
    if (isNil(toValue(value)))
      return true;
    if (isString(value))
      return /^\s*$/.test(value);
    return super.equals(value);
  }
}
const nil = new NullDrop();
const literalValues = {
  "true": true,
  "false": false,
  "nil": nil,
  "null": nil,
  "empty": new EmptyDrop(),
  "blank": new BlankDrop()
};
const rHex = /[\da-fA-F]/;
const rOct = /[0-7]/;
const escapeChar = {
  b: "\b",
  f: "\f",
  n: "\n",
  r: "\r",
  t: "	",
  v: "\v"
};
function hexVal(c) {
  const code = c.charCodeAt(0);
  if (code >= 97)
    return code - 87;
  if (code >= 65)
    return code - 55;
  return code - 48;
}
function parseStringLiteral(str) {
  let ret = "";
  for (let i = 1; i < str.length - 1; i++) {
    if (str[i] !== "\\") {
      ret += str[i];
      continue;
    }
    if (escapeChar[str[i + 1]] !== void 0) {
      ret += escapeChar[str[++i]];
    } else if (str[i + 1] === "u") {
      let val = 0;
      let j = i + 2;
      while (j <= i + 5 && rHex.test(str[j])) {
        val = val * 16 + hexVal(str[j++]);
      }
      i = j - 1;
      ret += String.fromCharCode(val);
    } else if (!rOct.test(str[i + 1])) {
      ret += str[++i];
    } else {
      let j = i + 1;
      let val = 0;
      while (j <= i + 3 && rOct.test(str[j])) {
        val = val * 8 + hexVal(str[j++]);
      }
      i = j - 1;
      ret += String.fromCharCode(val);
    }
  }
  return ret;
}
class Expression {
  constructor(tokens) {
    this.postfix = [...toPostfix(tokens)];
  }
  *evaluate(ctx, lenient) {
    assert(ctx, "unable to evaluate: context not defined");
    const operands = [];
    for (const token2 of this.postfix) {
      if (isOperatorToken(token2)) {
        const r = operands.pop();
        const l = operands.pop();
        const result = yield evalOperatorToken(ctx.opts.operators, token2, l, r, ctx);
        operands.push(result);
      } else {
        operands.push(yield evalToken(token2, ctx, lenient && this.postfix.length === 1));
      }
    }
    return operands[0];
  }
}
function evalToken(token2, ctx, lenient = false) {
  if (isPropertyAccessToken(token2))
    return evalPropertyAccessToken(token2, ctx, lenient);
  if (isRangeToken(token2))
    return evalRangeToken(token2, ctx);
  if (isLiteralToken(token2))
    return evalLiteralToken(token2);
  if (isNumberToken(token2))
    return evalNumberToken(token2);
  if (isWordToken(token2))
    return token2.getText();
  if (isQuotedToken(token2))
    return evalQuotedToken(token2);
}
function evalPropertyAccessToken(token2, ctx, lenient) {
  const props = token2.props.map((prop) => evalToken(prop, ctx, false));
  try {
    return ctx.get([token2.propertyName, ...props]);
  } catch (e) {
    if (lenient && e.name === "InternalUndefinedVariableError")
      return null;
    throw new UndefinedVariableError(e, token2);
  }
}
function evalNumberToken(token2) {
  const str = token2.whole.content + "." + (token2.decimal ? token2.decimal.content : "");
  return Number(str);
}
function evalQuotedToken(token2) {
  return parseStringLiteral(token2.getText());
}
function evalOperatorToken(operators, token2, lhs, rhs, ctx) {
  const impl = operators[token2.operator];
  return impl(lhs, rhs, ctx);
}
function evalLiteralToken(token2) {
  return literalValues[token2.literal];
}
function evalRangeToken(token2, ctx) {
  const low = evalToken(token2.lhs, ctx);
  const high = evalToken(token2.rhs, ctx);
  return range(+low, +high + 1);
}
function* toPostfix(tokens) {
  const ops = [];
  for (const token2 of tokens) {
    if (isOperatorToken(token2)) {
      while (ops.length && ops[ops.length - 1].getPrecedence() > token2.getPrecedence()) {
        yield ops.pop();
      }
      ops.push(token2);
    } else
      yield token2;
  }
  while (ops.length) {
    yield ops.pop();
  }
}
class Token {
  constructor(kind, input, begin, end, file) {
    this.kind = kind;
    this.input = input;
    this.begin = begin;
    this.end = end;
    this.file = file;
  }
  getText() {
    return this.input.slice(this.begin, this.end);
  }
  getPosition() {
    let [row, col] = [1, 1];
    for (let i = 0; i < this.begin; i++) {
      if (this.input[i] === "\n") {
        row++;
        col = 1;
      } else
        col++;
    }
    return [row, col];
  }
  size() {
    return this.end - this.begin;
  }
}
class DelimitedToken extends Token {
  constructor(kind, content, input, begin, end, trimLeft2, trimRight2, file) {
    super(kind, input, begin, end, file);
    this.trimLeft = false;
    this.trimRight = false;
    this.content = this.getText();
    const tl = content[0] === "-";
    const tr = last$1(content) === "-";
    this.content = content.slice(tl ? 1 : 0, tr ? -1 : content.length).trim();
    this.trimLeft = tl || trimLeft2;
    this.trimRight = tr || trimRight2;
  }
}
function whiteSpaceCtrl(tokens, options2) {
  let inRaw = false;
  for (let i = 0; i < tokens.length; i++) {
    const token2 = tokens[i];
    if (!isDelimitedToken(token2))
      continue;
    if (!inRaw && token2.trimLeft) {
      trimLeft(tokens[i - 1], options2.greedy);
    }
    if (isTagToken(token2)) {
      if (token2.name === "raw")
        inRaw = true;
      else if (token2.name === "endraw")
        inRaw = false;
    }
    if (!inRaw && token2.trimRight) {
      trimRight(tokens[i + 1], options2.greedy);
    }
  }
}
function trimLeft(token2, greedy) {
  if (!token2 || !isHTMLToken(token2))
    return;
  const mask = greedy ? BLANK : INLINE_BLANK;
  while (TYPES[token2.input.charCodeAt(token2.end - 1 - token2.trimRight)] & mask)
    token2.trimRight++;
}
function trimRight(token2, greedy) {
  if (!token2 || !isHTMLToken(token2))
    return;
  const mask = greedy ? BLANK : INLINE_BLANK;
  while (TYPES[token2.input.charCodeAt(token2.begin + token2.trimLeft)] & mask)
    token2.trimLeft++;
  if (token2.input.charAt(token2.begin + token2.trimLeft) === "\n")
    token2.trimLeft++;
}
class NumberToken extends Token {
  constructor(whole, decimal) {
    super(TokenKind.Number, whole.input, whole.begin, decimal ? decimal.end : whole.end, whole.file);
    this.whole = whole;
    this.decimal = decimal;
  }
}
class IdentifierToken extends Token {
  constructor(input, begin, end, file) {
    super(TokenKind.Word, input, begin, end, file);
    this.input = input;
    this.begin = begin;
    this.end = end;
    this.file = file;
    this.content = this.getText();
  }
  isNumber(allowSign = false) {
    const begin = allowSign && TYPES[this.input.charCodeAt(this.begin)] & SIGN ? this.begin + 1 : this.begin;
    for (let i = begin; i < this.end; i++) {
      if (!(TYPES[this.input.charCodeAt(i)] & NUMBER))
        return false;
    }
    return true;
  }
}
class LiteralToken extends Token {
  constructor(input, begin, end, file) {
    super(TokenKind.Literal, input, begin, end, file);
    this.input = input;
    this.begin = begin;
    this.end = end;
    this.file = file;
    this.literal = this.getText();
  }
}
const precedence = {
  "==": 1,
  "!=": 1,
  ">": 1,
  "<": 1,
  ">=": 1,
  "<=": 1,
  "contains": 1,
  "and": 0,
  "or": 0
};
class OperatorToken extends Token {
  constructor(input, begin, end, file) {
    super(TokenKind.Operator, input, begin, end, file);
    this.input = input;
    this.begin = begin;
    this.end = end;
    this.file = file;
    this.operator = this.getText();
  }
  getPrecedence() {
    const key = this.getText();
    return key in precedence ? precedence[key] : 1;
  }
}
class PropertyAccessToken extends Token {
  constructor(variable, props, end) {
    super(TokenKind.PropertyAccess, variable.input, variable.begin, end, variable.file);
    this.variable = variable;
    this.props = props;
    this.propertyName = this.variable instanceof IdentifierToken ? this.variable.getText() : parseStringLiteral(this.variable.getText());
  }
}
class FilterToken extends Token {
  constructor(name, args, input, begin, end, file) {
    super(TokenKind.Filter, input, begin, end, file);
    this.name = name;
    this.args = args;
  }
}
class HashToken extends Token {
  constructor(input, begin, end, name, value, file) {
    super(TokenKind.Hash, input, begin, end, file);
    this.input = input;
    this.begin = begin;
    this.end = end;
    this.name = name;
    this.value = value;
    this.file = file;
  }
}
class QuotedToken extends Token {
  constructor(input, begin, end, file) {
    super(TokenKind.Quoted, input, begin, end, file);
    this.input = input;
    this.begin = begin;
    this.end = end;
    this.file = file;
  }
}
class HTMLToken extends Token {
  constructor(input, begin, end, file) {
    super(TokenKind.HTML, input, begin, end, file);
    this.input = input;
    this.begin = begin;
    this.end = end;
    this.file = file;
    this.trimLeft = 0;
    this.trimRight = 0;
  }
  getContent() {
    return this.input.slice(this.begin + this.trimLeft, this.end - this.trimRight);
  }
}
class RangeToken extends Token {
  constructor(input, begin, end, lhs, rhs, file) {
    super(TokenKind.Range, input, begin, end, file);
    this.input = input;
    this.begin = begin;
    this.end = end;
    this.lhs = lhs;
    this.rhs = rhs;
    this.file = file;
  }
}
class OutputToken extends DelimitedToken {
  constructor(input, begin, end, options2, file) {
    const { trimOutputLeft, trimOutputRight, outputDelimiterLeft, outputDelimiterRight } = options2;
    const value = input.slice(begin + outputDelimiterLeft.length, end - outputDelimiterRight.length);
    super(TokenKind.Output, value, input, begin, end, trimOutputLeft, trimOutputRight, file);
  }
}
function matchOperator(str, begin, trie, end = str.length) {
  let node = trie;
  let i = begin;
  let info;
  while (node[str[i]] && i < end) {
    node = node[str[i++]];
    if (node["end"])
      info = node;
  }
  if (!info)
    return -1;
  if (info["needBoundary"] && TYPES[str.charCodeAt(i)] & IDENTIFIER)
    return -1;
  return i;
}
class LiquidTagToken extends DelimitedToken {
  constructor(input, begin, end, options2, file) {
    const value = input.slice(begin, end);
    super(TokenKind.Tag, value, input, begin, end, false, false, file);
    if (!/\S/.test(value)) {
      this.name = "";
      this.args = "";
    } else {
      const tokenizer2 = new Tokenizer(this.content, options2.operatorsTrie);
      this.name = tokenizer2.readTagName();
      if (!this.name)
        throw new TokenizationError(`illegal liquid tag syntax`, this);
      tokenizer2.skipBlank();
      this.args = tokenizer2.remaining();
    }
  }
}
class Tokenizer {
  constructor(input, trie = defaultOptions.operatorsTrie, file = "") {
    this.input = input;
    this.trie = trie;
    this.file = file;
    this.p = 0;
    this.rawBeginAt = -1;
    this.N = input.length;
  }
  readExpression() {
    return new Expression(this.readExpressionTokens());
  }
  *readExpressionTokens() {
    const operand = this.readValue();
    if (!operand)
      return;
    yield operand;
    while (this.p < this.N) {
      const operator = this.readOperator();
      if (!operator)
        return;
      const operand2 = this.readValue();
      if (!operand2)
        return;
      yield operator;
      yield operand2;
    }
  }
  readOperator() {
    this.skipBlank();
    const end = matchOperator(this.input, this.p, this.trie);
    if (end === -1)
      return;
    return new OperatorToken(this.input, this.p, this.p = end, this.file);
  }
  readFilters() {
    const filters2 = [];
    while (true) {
      const filter = this.readFilter();
      if (!filter)
        return filters2;
      filters2.push(filter);
    }
  }
  readFilter() {
    this.skipBlank();
    if (this.end())
      return null;
    assert(this.peek() === "|", () => `unexpected token at ${this.snapshot()}`);
    this.p++;
    const begin = this.p;
    const name = this.readIdentifier();
    if (!name.size())
      return null;
    const args = [];
    this.skipBlank();
    if (this.peek() === ":") {
      do {
        ++this.p;
        const arg = this.readFilterArg();
        arg && args.push(arg);
        this.skipBlank();
        assert(this.end() || this.peek() === "," || this.peek() === "|", () => `unexpected character ${this.snapshot()}`);
      } while (this.peek() === ",");
    }
    return new FilterToken(name.getText(), args, this.input, begin, this.p, this.file);
  }
  readFilterArg() {
    const key = this.readValue();
    if (!key)
      return;
    this.skipBlank();
    if (this.peek() !== ":")
      return key;
    ++this.p;
    const value = this.readValue();
    return [key.getText(), value];
  }
  readTopLevelTokens(options2 = defaultOptions) {
    const tokens = [];
    while (this.p < this.N) {
      const token2 = this.readTopLevelToken(options2);
      tokens.push(token2);
    }
    whiteSpaceCtrl(tokens, options2);
    return tokens;
  }
  readTopLevelToken(options2) {
    const { tagDelimiterLeft, outputDelimiterLeft } = options2;
    if (this.rawBeginAt > -1)
      return this.readEndrawOrRawContent(options2);
    if (this.match(tagDelimiterLeft))
      return this.readTagToken(options2);
    if (this.match(outputDelimiterLeft))
      return this.readOutputToken(options2);
    return this.readHTMLToken([tagDelimiterLeft, outputDelimiterLeft]);
  }
  readHTMLToken(stopStrings) {
    const begin = this.p;
    while (this.p < this.N) {
      if (stopStrings.some((str) => this.match(str)))
        break;
      ++this.p;
    }
    return new HTMLToken(this.input, begin, this.p, this.file);
  }
  readTagToken(options2 = defaultOptions) {
    const { file, input } = this;
    const begin = this.p;
    if (this.readToDelimiter(options2.tagDelimiterRight) === -1) {
      throw this.mkError(`tag ${this.snapshot(begin)} not closed`, begin);
    }
    const token2 = new TagToken(input, begin, this.p, options2, file);
    if (token2.name === "raw")
      this.rawBeginAt = begin;
    return token2;
  }
  readToDelimiter(delimiter) {
    while (this.p < this.N) {
      if (this.peekType() & QUOTE) {
        this.readQuoted();
        continue;
      }
      ++this.p;
      if (this.rmatch(delimiter))
        return this.p;
    }
    return -1;
  }
  readOutputToken(options2 = defaultOptions) {
    const { file, input } = this;
    const { outputDelimiterRight } = options2;
    const begin = this.p;
    if (this.readToDelimiter(outputDelimiterRight) === -1) {
      throw this.mkError(`output ${this.snapshot(begin)} not closed`, begin);
    }
    return new OutputToken(input, begin, this.p, options2, file);
  }
  readEndrawOrRawContent(options2) {
    const { tagDelimiterLeft, tagDelimiterRight } = options2;
    const begin = this.p;
    let leftPos = this.readTo(tagDelimiterLeft) - tagDelimiterLeft.length;
    while (this.p < this.N) {
      if (this.readIdentifier().getText() !== "endraw") {
        leftPos = this.readTo(tagDelimiterLeft) - tagDelimiterLeft.length;
        continue;
      }
      while (this.p <= this.N) {
        if (this.rmatch(tagDelimiterRight)) {
          const end = this.p;
          if (begin === leftPos) {
            this.rawBeginAt = -1;
            return new TagToken(this.input, begin, end, options2, this.file);
          } else {
            this.p = leftPos;
            return new HTMLToken(this.input, begin, leftPos, this.file);
          }
        }
        if (this.rmatch(tagDelimiterLeft))
          break;
        this.p++;
      }
    }
    throw this.mkError(`raw ${this.snapshot(this.rawBeginAt)} not closed`, begin);
  }
  readLiquidTagTokens(options2 = defaultOptions) {
    const tokens = [];
    while (this.p < this.N) {
      const token2 = this.readLiquidTagToken(options2);
      if (token2.name)
        tokens.push(token2);
    }
    return tokens;
  }
  readLiquidTagToken(options2) {
    const { file, input } = this;
    const begin = this.p;
    let end = this.N;
    if (this.readToDelimiter("\n") !== -1)
      end = this.p;
    return new LiquidTagToken(input, begin, end, options2, file);
  }
  mkError(msg, begin) {
    return new TokenizationError(msg, new IdentifierToken(this.input, begin, this.N, this.file));
  }
  snapshot(begin = this.p) {
    return JSON.stringify(ellipsis(this.input.slice(begin), 16));
  }
  readWord() {
    console.warn("Tokenizer#readWord() will be removed, use #readIdentifier instead");
    return this.readIdentifier();
  }
  readIdentifier() {
    this.skipBlank();
    const begin = this.p;
    while (this.peekType() & IDENTIFIER)
      ++this.p;
    return new IdentifierToken(this.input, begin, this.p, this.file);
  }
  readTagName() {
    this.skipBlank();
    if (this.input[this.p] === "#")
      return this.input.slice(this.p, ++this.p);
    return this.readIdentifier().getText();
  }
  readHashes(jekyllStyle) {
    const hashes = [];
    while (true) {
      const hash = this.readHash(jekyllStyle);
      if (!hash)
        return hashes;
      hashes.push(hash);
    }
  }
  readHash(jekyllStyle) {
    this.skipBlank();
    if (this.peek() === ",")
      ++this.p;
    const begin = this.p;
    const name = this.readIdentifier();
    if (!name.size())
      return;
    let value;
    this.skipBlank();
    const sep2 = jekyllStyle ? "=" : ":";
    if (this.peek() === sep2) {
      ++this.p;
      value = this.readValue();
    }
    return new HashToken(this.input, begin, this.p, name, value, this.file);
  }
  remaining() {
    return this.input.slice(this.p);
  }
  advance(i = 1) {
    this.p += i;
  }
  end() {
    return this.p >= this.N;
  }
  readTo(end) {
    while (this.p < this.N) {
      ++this.p;
      if (this.rmatch(end))
        return this.p;
    }
    return -1;
  }
  readValue() {
    const value = this.readQuoted() || this.readRange();
    if (value)
      return value;
    if (this.peek() === "[") {
      this.p++;
      const prop = this.readQuoted();
      if (!prop)
        return;
      if (this.peek() !== "]")
        return;
      this.p++;
      return new PropertyAccessToken(prop, [], this.p);
    }
    const variable = this.readIdentifier();
    if (!variable.size())
      return;
    let isNumber2 = variable.isNumber(true);
    const props = [];
    while (true) {
      if (this.peek() === "[") {
        isNumber2 = false;
        this.p++;
        const prop = this.readValue() || new IdentifierToken(this.input, this.p, this.p, this.file);
        this.readTo("]");
        props.push(prop);
      } else if (this.peek() === "." && this.peek(1) !== ".") {
        this.p++;
        const prop = this.readIdentifier();
        if (!prop.size())
          break;
        if (!prop.isNumber())
          isNumber2 = false;
        props.push(prop);
      } else
        break;
    }
    if (!props.length && literalValues.hasOwnProperty(variable.content)) {
      return new LiteralToken(this.input, variable.begin, variable.end, this.file);
    }
    if (isNumber2)
      return new NumberToken(variable, props[0]);
    return new PropertyAccessToken(variable, props, this.p);
  }
  readRange() {
    this.skipBlank();
    const begin = this.p;
    if (this.peek() !== "(")
      return;
    ++this.p;
    const lhs = this.readValueOrThrow();
    this.p += 2;
    const rhs = this.readValueOrThrow();
    ++this.p;
    return new RangeToken(this.input, begin, this.p, lhs, rhs, this.file);
  }
  readValueOrThrow() {
    const value = this.readValue();
    assert(value, () => `unexpected token ${this.snapshot()}, value expected`);
    return value;
  }
  readQuoted() {
    this.skipBlank();
    const begin = this.p;
    if (!(this.peekType() & QUOTE))
      return;
    ++this.p;
    let escaped = false;
    while (this.p < this.N) {
      ++this.p;
      if (this.input[this.p - 1] === this.input[begin] && !escaped)
        break;
      if (escaped)
        escaped = false;
      else if (this.input[this.p - 1] === "\\")
        escaped = true;
    }
    return new QuotedToken(this.input, begin, this.p, this.file);
  }
  *readFileNameTemplate(options2) {
    const { outputDelimiterLeft } = options2;
    const htmlStopStrings = [",", " ", outputDelimiterLeft];
    const htmlStopStringSet = new Set(htmlStopStrings);
    while (this.p < this.N && !htmlStopStringSet.has(this.peek())) {
      yield this.match(outputDelimiterLeft) ? this.readOutputToken(options2) : this.readHTMLToken(htmlStopStrings);
    }
  }
  match(word) {
    for (let i = 0; i < word.length; i++) {
      if (word[i] !== this.input[this.p + i])
        return false;
    }
    return true;
  }
  rmatch(pattern2) {
    for (let i = 0; i < pattern2.length; i++) {
      if (pattern2[pattern2.length - 1 - i] !== this.input[this.p - 1 - i])
        return false;
    }
    return true;
  }
  peekType(n = 0) {
    return TYPES[this.input.charCodeAt(this.p + n)];
  }
  peek(n = 0) {
    return this.input[this.p + n];
  }
  skipBlank() {
    while (this.peekType() & BLANK)
      ++this.p;
  }
}
class TagToken extends DelimitedToken {
  constructor(input, begin, end, options2, file) {
    const { trimTagLeft, trimTagRight, tagDelimiterLeft, tagDelimiterRight } = options2;
    const value = input.slice(begin + tagDelimiterLeft.length, end - tagDelimiterRight.length);
    super(TokenKind.Tag, value, input, begin, end, trimTagLeft, trimTagRight, file);
    const tokenizer2 = new Tokenizer(this.content, options2.operatorsTrie);
    this.name = tokenizer2.readTagName();
    if (!this.name)
      throw new TokenizationError(`illegal tag syntax`, this);
    tokenizer2.skipBlank();
    this.args = tokenizer2.remaining();
  }
}
class ParseStream {
  constructor(tokens, parseToken) {
    this.handlers = {};
    this.stopRequested = false;
    this.tokens = tokens;
    this.parseToken = parseToken;
  }
  on(name, cb) {
    this.handlers[name] = cb;
    return this;
  }
  trigger(event, arg) {
    const h = this.handlers[event];
    return h ? (h.call(this, arg), true) : false;
  }
  start() {
    this.trigger("start");
    let token2;
    while (!this.stopRequested && (token2 = this.tokens.shift())) {
      if (this.trigger("token", token2))
        continue;
      if (isTagToken(token2) && this.trigger(`tag:${token2.name}`, token2)) {
        continue;
      }
      const template = this.parseToken(token2, this.tokens);
      this.trigger("template", template);
    }
    if (!this.stopRequested)
      this.trigger("end");
    return this;
  }
  stop() {
    this.stopRequested = true;
    return this;
  }
}
class Hash {
  constructor(markup, jekyllStyle) {
    this.hash = {};
    const tokenizer2 = new Tokenizer(markup, {});
    for (const hash of tokenizer2.readHashes(jekyllStyle)) {
      this.hash[hash.name.content] = hash.value;
    }
  }
  *render(ctx) {
    const hash = {};
    for (const key of Object.keys(this.hash)) {
      hash[key] = this.hash[key] === void 0 ? true : yield evalToken(this.hash[key], ctx);
    }
    return hash;
  }
}
function isKeyValuePair(arr) {
  return isArray(arr);
}
class Filter {
  constructor(name, impl, args, liquid2) {
    this.name = name;
    this.impl = impl || identify;
    this.args = args;
    this.liquid = liquid2;
  }
  render(value, context) {
    const argv = [];
    for (const arg of this.args) {
      if (isKeyValuePair(arg))
        argv.push([arg[0], evalToken(arg[1], context)]);
      else
        argv.push(evalToken(arg, context));
    }
    return this.impl.apply({ context, liquid: this.liquid }, [value, ...argv]);
  }
}
class Value {
  constructor(str, liquid2) {
    this.filters = [];
    const tokenizer2 = new Tokenizer(str, liquid2.options.operatorsTrie);
    this.initial = tokenizer2.readExpression();
    this.filters = tokenizer2.readFilters().map(({ name, args }) => new Filter(name, liquid2.filters.get(name), args, liquid2));
  }
  *value(ctx, lenient) {
    lenient = lenient || ctx.opts.lenientIf && this.filters.length > 0 && this.filters[0].name === "default";
    let val = yield this.initial.evaluate(ctx, lenient);
    for (const filter of this.filters) {
      val = yield filter.render(val, ctx);
    }
    return val;
  }
}
function toPromise(val) {
  return __awaiter(this, void 0, void 0, function* () {
    if (!isIterator(val))
      return val;
    let value;
    let done = false;
    let next = "next";
    do {
      const state = val[next](value);
      done = state.done;
      value = state.value;
      next = "next";
      try {
        if (isIterator(value))
          value = toPromise(value);
        if (isPromise(value))
          value = yield value;
      } catch (err) {
        next = "throw";
        value = err;
      }
    } while (!done);
    return value;
  });
}
function toValueSync(val) {
  if (!isIterator(val))
    return val;
  let value;
  let done = false;
  let next = "next";
  do {
    const state = val[next](value);
    done = state.done;
    value = state.value;
    next = "next";
    if (isIterator(value)) {
      try {
        value = toValueSync(value);
      } catch (err) {
        next = "throw";
        value = err;
      }
    }
  } while (!done);
  return value;
}
var assign = {
  parse: function(token2) {
    const tokenizer2 = new Tokenizer(token2.args, this.liquid.options.operatorsTrie);
    this.key = tokenizer2.readIdentifier().content;
    tokenizer2.skipBlank();
    assert(tokenizer2.peek() === "=", () => `illegal token ${token2.getText()}`);
    tokenizer2.advance();
    this.value = new Value(tokenizer2.remaining(), this.liquid);
  },
  render: function* (ctx) {
    ctx.bottom()[this.key] = yield this.value.value(ctx, this.liquid.options.lenientIf);
  }
};
class ForloopDrop extends Drop {
  constructor(length, collection, variable) {
    super();
    this.i = 0;
    this.length = length;
    this.name = `${variable}-${collection}`;
  }
  next() {
    this.i++;
  }
  index0() {
    return this.i;
  }
  index() {
    return this.i + 1;
  }
  first() {
    return this.i === 0;
  }
  last() {
    return this.i === this.length - 1;
  }
  rindex() {
    return this.length - this.i;
  }
  rindex0() {
    return this.length - this.i - 1;
  }
  valueOf() {
    return JSON.stringify(this);
  }
}
const MODIFIERS = ["offset", "limit", "reversed"];
var For = {
  type: "block",
  parse: function(token2, remainTokens) {
    const tokenizer2 = new Tokenizer(token2.args, this.liquid.options.operatorsTrie);
    const variable = tokenizer2.readIdentifier();
    const inStr = tokenizer2.readIdentifier();
    const collection = tokenizer2.readValue();
    assert(variable.size() && inStr.content === "in" && collection, () => `illegal tag: ${token2.getText()}`);
    this.variable = variable.content;
    this.collection = collection;
    this.hash = new Hash(tokenizer2.remaining());
    this.templates = [];
    this.elseTemplates = [];
    let p;
    const stream = this.liquid.parser.parseStream(remainTokens).on("start", () => p = this.templates).on("tag:else", () => p = this.elseTemplates).on("tag:endfor", () => stream.stop()).on("template", (tpl) => p.push(tpl)).on("end", () => {
      throw new Error(`tag ${token2.getText()} not closed`);
    });
    stream.start();
  },
  render: function* (ctx, emitter) {
    const r = this.liquid.renderer;
    let collection = toEnumerable(yield evalToken(this.collection, ctx));
    if (!collection.length) {
      yield r.renderTemplates(this.elseTemplates, ctx, emitter);
      return;
    }
    const continueKey = "continue-" + this.variable + "-" + this.collection.getText();
    ctx.push({ continue: ctx.getRegister(continueKey) });
    const hash = yield this.hash.render(ctx);
    ctx.pop();
    const modifiers = this.liquid.options.orderedFilterParameters ? Object.keys(hash).filter((x) => MODIFIERS.includes(x)) : MODIFIERS.filter((x) => hash[x] !== void 0);
    collection = modifiers.reduce((collection2, modifier) => {
      if (modifier === "offset")
        return offset(collection2, hash["offset"]);
      if (modifier === "limit")
        return limit(collection2, hash["limit"]);
      return reversed(collection2);
    }, collection);
    ctx.setRegister(continueKey, (hash["offset"] || 0) + collection.length);
    const scope = { forloop: new ForloopDrop(collection.length, this.collection.getText(), this.variable) };
    ctx.push(scope);
    for (const item of collection) {
      scope[this.variable] = item;
      yield r.renderTemplates(this.templates, ctx, emitter);
      if (emitter["break"]) {
        emitter["break"] = false;
        break;
      }
      emitter["continue"] = false;
      scope.forloop.next();
    }
    ctx.pop();
  }
};
function reversed(arr) {
  return [...arr].reverse();
}
function offset(arr, count) {
  return arr.slice(count);
}
function limit(arr, count) {
  return arr.slice(0, count);
}
var capture = {
  parse: function(tagToken, remainTokens) {
    const tokenizer2 = new Tokenizer(tagToken.args, this.liquid.options.operatorsTrie);
    this.variable = readVariableName(tokenizer2);
    assert(this.variable, () => `${tagToken.args} not valid identifier`);
    this.templates = [];
    const stream = this.liquid.parser.parseStream(remainTokens);
    stream.on("tag:endcapture", () => stream.stop()).on("template", (tpl) => this.templates.push(tpl)).on("end", () => {
      throw new Error(`tag ${tagToken.getText()} not closed`);
    });
    stream.start();
  },
  render: function* (ctx) {
    const r = this.liquid.renderer;
    const html2 = yield r.renderTemplates(this.templates, ctx);
    ctx.bottom()[this.variable] = html2;
  }
};
function readVariableName(tokenizer2) {
  const word = tokenizer2.readIdentifier().content;
  if (word)
    return word;
  const quoted = tokenizer2.readQuoted();
  if (quoted)
    return evalQuotedToken(quoted);
}
var Case = {
  parse: function(tagToken, remainTokens) {
    this.cond = new Value(tagToken.args, this.liquid);
    this.cases = [];
    this.elseTemplates = [];
    let p = [];
    const stream = this.liquid.parser.parseStream(remainTokens).on("tag:when", (token2) => {
      p = [];
      const tokenizer2 = new Tokenizer(token2.args, this.liquid.options.operatorsTrie);
      while (!tokenizer2.end()) {
        const value = tokenizer2.readValue();
        this.cases.push({
          val: value,
          templates: p
        });
        tokenizer2.readTo(",");
      }
    }).on("tag:else", () => p = this.elseTemplates).on("tag:endcase", () => stream.stop()).on("template", (tpl) => p.push(tpl)).on("end", () => {
      throw new Error(`tag ${tagToken.getText()} not closed`);
    });
    stream.start();
  },
  render: function* (ctx, emitter) {
    const r = this.liquid.renderer;
    const cond = toValue(yield this.cond.value(ctx, ctx.opts.lenientIf));
    for (const branch of this.cases) {
      const val = evalToken(branch.val, ctx, ctx.opts.lenientIf);
      if (val === cond) {
        yield r.renderTemplates(branch.templates, ctx, emitter);
        return;
      }
    }
    yield r.renderTemplates(this.elseTemplates, ctx, emitter);
  }
};
var comment = {
  parse: function(tagToken, remainTokens) {
    const stream = this.liquid.parser.parseStream(remainTokens);
    stream.on("token", (token2) => {
      if (token2.name === "endcomment")
        stream.stop();
    }).on("end", () => {
      throw new Error(`tag ${tagToken.getText()} not closed`);
    });
    stream.start();
  }
};
var BlockMode;
(function(BlockMode2) {
  BlockMode2[BlockMode2["OUTPUT"] = 0] = "OUTPUT";
  BlockMode2[BlockMode2["STORE"] = 1] = "STORE";
})(BlockMode || (BlockMode = {}));
var BlockMode$1 = BlockMode;
var render = {
  parseFilePath,
  renderFilePath,
  parse: function(token2) {
    const args = token2.args;
    const tokenizer2 = new Tokenizer(args, this.liquid.options.operatorsTrie);
    this["file"] = this.parseFilePath(tokenizer2, this.liquid);
    this["currentFile"] = token2.file;
    while (!tokenizer2.end()) {
      tokenizer2.skipBlank();
      const begin = tokenizer2.p;
      const keyword = tokenizer2.readIdentifier();
      if (keyword.content === "with" || keyword.content === "for") {
        tokenizer2.skipBlank();
        if (tokenizer2.peek() !== ":") {
          const value = tokenizer2.readValue();
          if (value) {
            const beforeAs = tokenizer2.p;
            const asStr = tokenizer2.readIdentifier();
            let alias;
            if (asStr.content === "as")
              alias = tokenizer2.readIdentifier();
            else
              tokenizer2.p = beforeAs;
            this[keyword.content] = { value, alias: alias && alias.content };
            tokenizer2.skipBlank();
            if (tokenizer2.peek() === ",")
              tokenizer2.advance();
            continue;
          }
        }
      }
      tokenizer2.p = begin;
      break;
    }
    this.hash = new Hash(tokenizer2.remaining());
  },
  render: function* (ctx, emitter) {
    const { liquid: liquid2, hash } = this;
    const filepath = yield this.renderFilePath(this["file"], ctx, liquid2);
    assert(filepath, () => `illegal filename "${filepath}"`);
    const childCtx = new Context({}, ctx.opts, { sync: ctx.sync, globals: ctx.globals, strictVariables: ctx.strictVariables });
    const scope = childCtx.bottom();
    __assign(scope, yield hash.render(ctx));
    if (this["with"]) {
      const { value, alias } = this["with"];
      scope[alias || filepath] = evalToken(value, ctx);
    }
    if (this["for"]) {
      const { value, alias } = this["for"];
      let collection = evalToken(value, ctx);
      collection = toEnumerable(collection);
      scope["forloop"] = new ForloopDrop(collection.length, value.getText(), alias);
      for (const item of collection) {
        scope[alias] = item;
        const templates = yield liquid2._parsePartialFile(filepath, childCtx.sync, this["currentFile"]);
        yield liquid2.renderer.renderTemplates(templates, childCtx, emitter);
        scope["forloop"].next();
      }
    } else {
      const templates = yield liquid2._parsePartialFile(filepath, childCtx.sync, this["currentFile"]);
      yield liquid2.renderer.renderTemplates(templates, childCtx, emitter);
    }
  }
};
function parseFilePath(tokenizer2, liquid2) {
  if (liquid2.options.dynamicPartials) {
    const file = tokenizer2.readValue();
    if (file === void 0)
      throw new TypeError(`illegal argument "${tokenizer2.input}"`);
    if (file.getText() === "none")
      return null;
    if (isQuotedToken(file)) {
      const templates2 = liquid2.parse(evalQuotedToken(file));
      return optimize(templates2);
    }
    return file;
  }
  const tokens = [...tokenizer2.readFileNameTemplate(liquid2.options)];
  const templates = optimize(liquid2.parser.parseTokens(tokens));
  return templates === "none" ? null : templates;
}
function optimize(templates) {
  if (templates.length === 1 && isHTMLToken(templates[0].token))
    return templates[0].token.getContent();
  return templates;
}
function renderFilePath(file, ctx, liquid2) {
  if (typeof file === "string")
    return file;
  if (Array.isArray(file))
    return liquid2.renderer.renderTemplates(file, ctx);
  return evalToken(file, ctx);
}
var include = {
  parseFilePath,
  renderFilePath,
  parse: function(token2) {
    const args = token2.args;
    const tokenizer2 = new Tokenizer(args, this.liquid.options.operatorsTrie);
    this["file"] = this.parseFilePath(tokenizer2, this.liquid);
    this["currentFile"] = token2.file;
    const begin = tokenizer2.p;
    const withStr = tokenizer2.readIdentifier();
    if (withStr.content === "with") {
      tokenizer2.skipBlank();
      if (tokenizer2.peek() !== ":") {
        this.withVar = tokenizer2.readValue();
      } else
        tokenizer2.p = begin;
    } else
      tokenizer2.p = begin;
    this.hash = new Hash(tokenizer2.remaining(), this.liquid.options.jekyllInclude);
  },
  render: function* (ctx, emitter) {
    const { liquid: liquid2, hash, withVar } = this;
    const { renderer } = liquid2;
    const filepath = yield this.renderFilePath(this["file"], ctx, liquid2);
    assert(filepath, () => `illegal filename "${filepath}"`);
    const saved = ctx.saveRegister("blocks", "blockMode");
    ctx.setRegister("blocks", {});
    ctx.setRegister("blockMode", BlockMode$1.OUTPUT);
    const scope = yield hash.render(ctx);
    if (withVar)
      scope[filepath] = evalToken(withVar, ctx);
    const templates = yield liquid2._parsePartialFile(filepath, ctx.sync, this["currentFile"]);
    ctx.push(ctx.opts.jekyllInclude ? { include: scope } : scope);
    yield renderer.renderTemplates(templates, ctx, emitter);
    ctx.pop();
    ctx.restoreRegister(saved);
  }
};
var decrement = {
  parse: function(token2) {
    const tokenizer2 = new Tokenizer(token2.args, this.liquid.options.operatorsTrie);
    this.variable = tokenizer2.readIdentifier().content;
  },
  render: function(context, emitter) {
    const scope = context.environments;
    if (!isNumber(scope[this.variable])) {
      scope[this.variable] = 0;
    }
    emitter.write(stringify(--scope[this.variable]));
  }
};
var cycle = {
  parse: function(tagToken) {
    const tokenizer2 = new Tokenizer(tagToken.args, this.liquid.options.operatorsTrie);
    const group = tokenizer2.readValue();
    tokenizer2.skipBlank();
    this.candidates = [];
    if (group) {
      if (tokenizer2.peek() === ":") {
        this.group = group;
        tokenizer2.advance();
      } else
        this.candidates.push(group);
    }
    while (!tokenizer2.end()) {
      const value = tokenizer2.readValue();
      if (value)
        this.candidates.push(value);
      tokenizer2.readTo(",");
    }
    assert(this.candidates.length, () => `empty candidates: ${tagToken.getText()}`);
  },
  render: function(ctx, emitter) {
    const group = evalToken(this.group, ctx);
    const fingerprint = `cycle:${group}:` + this.candidates.join(",");
    const groups = ctx.getRegister("cycle");
    let idx = groups[fingerprint];
    if (idx === void 0) {
      idx = groups[fingerprint] = 0;
    }
    const candidate = this.candidates[idx];
    idx = (idx + 1) % this.candidates.length;
    groups[fingerprint] = idx;
    const html2 = evalToken(candidate, ctx);
    emitter.write(html2);
  }
};
var If = {
  parse: function(tagToken, remainTokens) {
    this.branches = [];
    this.elseTemplates = [];
    let p;
    this.liquid.parser.parseStream(remainTokens).on("start", () => this.branches.push({
      predicate: new Value(tagToken.args, this.liquid),
      templates: p = []
    })).on("tag:elsif", (token2) => this.branches.push({
      predicate: new Value(token2.args, this.liquid),
      templates: p = []
    })).on("tag:else", () => p = this.elseTemplates).on("tag:endif", function() {
      this.stop();
    }).on("template", (tpl) => p.push(tpl)).on("end", () => {
      throw new Error(`tag ${tagToken.getText()} not closed`);
    }).start();
  },
  render: function* (ctx, emitter) {
    const r = this.liquid.renderer;
    for (const { predicate, templates } of this.branches) {
      const value = yield predicate.value(ctx, ctx.opts.lenientIf);
      if (isTruthy(value, ctx)) {
        yield r.renderTemplates(templates, ctx, emitter);
        return;
      }
    }
    yield r.renderTemplates(this.elseTemplates, ctx, emitter);
  }
};
var increment = {
  parse: function(token2) {
    const tokenizer2 = new Tokenizer(token2.args, this.liquid.options.operatorsTrie);
    this.variable = tokenizer2.readIdentifier().content;
  },
  render: function(context, emitter) {
    const scope = context.environments;
    if (!isNumber(scope[this.variable])) {
      scope[this.variable] = 0;
    }
    const val = scope[this.variable];
    scope[this.variable]++;
    emitter.write(stringify(val));
  }
};
var layout = {
  parseFilePath,
  renderFilePath,
  parse: function(token2, remainTokens) {
    const tokenizer2 = new Tokenizer(token2.args, this.liquid.options.operatorsTrie);
    this["file"] = this.parseFilePath(tokenizer2, this.liquid);
    this["currentFile"] = token2.file;
    this.hash = new Hash(tokenizer2.remaining());
    this.tpls = this.liquid.parser.parseTokens(remainTokens);
  },
  render: function* (ctx, emitter) {
    const { liquid: liquid2, hash, file } = this;
    const { renderer } = liquid2;
    if (file === null) {
      ctx.setRegister("blockMode", BlockMode$1.OUTPUT);
      yield renderer.renderTemplates(this.tpls, ctx, emitter);
      return;
    }
    const filepath = yield this.renderFilePath(this["file"], ctx, liquid2);
    assert(filepath, () => `illegal filename "${filepath}"`);
    const templates = yield liquid2._parseLayoutFile(filepath, ctx.sync, this["currentFile"]);
    ctx.setRegister("blockMode", BlockMode$1.STORE);
    const html2 = yield renderer.renderTemplates(this.tpls, ctx);
    const blocks = ctx.getRegister("blocks");
    if (blocks[""] === void 0)
      blocks[""] = (parent, emitter2) => emitter2.write(html2);
    ctx.setRegister("blockMode", BlockMode$1.OUTPUT);
    ctx.push(yield hash.render(ctx));
    yield renderer.renderTemplates(templates, ctx, emitter);
    ctx.pop();
  }
};
class BlockDrop extends Drop {
  constructor(superBlockRender = () => "") {
    super();
    this.superBlockRender = superBlockRender;
  }
  super() {
    return this.superBlockRender();
  }
}
var block = {
  parse(token2, remainTokens) {
    const match = /\w+/.exec(token2.args);
    this.block = match ? match[0] : "";
    this.tpls = [];
    this.liquid.parser.parseStream(remainTokens).on("tag:endblock", function() {
      this.stop();
    }).on("template", (tpl) => this.tpls.push(tpl)).on("end", () => {
      throw new Error(`tag ${token2.getText()} not closed`);
    }).start();
  },
  *render(ctx, emitter) {
    const blockRender = this.getBlockRender(ctx);
    if (ctx.getRegister("blockMode") === BlockMode$1.STORE) {
      ctx.getRegister("blocks")[this.block] = blockRender;
    } else {
      yield blockRender(new BlockDrop(), emitter);
    }
  },
  getBlockRender(ctx) {
    const { liquid: liquid2, tpls } = this;
    const renderChild = ctx.getRegister("blocks")[this.block];
    const renderCurrent = function* (superBlock, emitter) {
      ctx.push({ block: superBlock });
      yield liquid2.renderer.renderTemplates(tpls, ctx, emitter);
      ctx.pop();
    };
    return renderChild ? (superBlock, emitter) => renderChild(new BlockDrop(() => renderCurrent(superBlock, emitter)), emitter) : renderCurrent;
  }
};
var raw = {
  parse: function(tagToken, remainTokens) {
    this.tokens = [];
    const stream = this.liquid.parser.parseStream(remainTokens);
    stream.on("token", (token2) => {
      if (token2.name === "endraw")
        stream.stop();
      else
        this.tokens.push(token2);
    }).on("end", () => {
      throw new Error(`tag ${tagToken.getText()} not closed`);
    });
    stream.start();
  },
  render: function() {
    return this.tokens.map((token2) => token2.getText()).join("");
  }
};
class TablerowloopDrop extends ForloopDrop {
  constructor(length, cols, collection, variable) {
    super(length, collection, variable);
    this.length = length;
    this.cols = cols;
  }
  row() {
    return Math.floor(this.i / this.cols) + 1;
  }
  col0() {
    return this.i % this.cols;
  }
  col() {
    return this.col0() + 1;
  }
  col_first() {
    return this.col0() === 0;
  }
  col_last() {
    return this.col() === this.cols;
  }
}
var tablerow = {
  parse: function(tagToken, remainTokens) {
    const tokenizer2 = new Tokenizer(tagToken.args, this.liquid.options.operatorsTrie);
    const variable = tokenizer2.readIdentifier();
    tokenizer2.skipBlank();
    const tmp = tokenizer2.readIdentifier();
    assert(tmp && tmp.content === "in", () => `illegal tag: ${tagToken.getText()}`);
    this.variable = variable.content;
    this.collection = tokenizer2.readValue();
    this.hash = new Hash(tokenizer2.remaining());
    this.templates = [];
    let p;
    const stream = this.liquid.parser.parseStream(remainTokens).on("start", () => p = this.templates).on("tag:endtablerow", () => stream.stop()).on("template", (tpl) => p.push(tpl)).on("end", () => {
      throw new Error(`tag ${tagToken.getText()} not closed`);
    });
    stream.start();
  },
  render: function* (ctx, emitter) {
    let collection = toEnumerable(yield evalToken(this.collection, ctx));
    const hash = yield this.hash.render(ctx);
    const offset2 = hash.offset || 0;
    const limit2 = hash.limit === void 0 ? collection.length : hash.limit;
    collection = collection.slice(offset2, offset2 + limit2);
    const cols = hash.cols || collection.length;
    const r = this.liquid.renderer;
    const tablerowloop = new TablerowloopDrop(collection.length, cols, this.collection.getText(), this.variable);
    const scope = { tablerowloop };
    ctx.push(scope);
    for (let idx = 0; idx < collection.length; idx++, tablerowloop.next()) {
      scope[this.variable] = collection[idx];
      if (tablerowloop.col0() === 0) {
        if (tablerowloop.row() !== 1)
          emitter.write("</tr>");
        emitter.write(`<tr class="row${tablerowloop.row()}">`);
      }
      emitter.write(`<td class="col${tablerowloop.col()}">`);
      yield r.renderTemplates(this.templates, ctx, emitter);
      emitter.write("</td>");
    }
    if (collection.length)
      emitter.write("</tr>");
    ctx.pop();
  }
};
var unless = {
  parse: function(tagToken, remainTokens) {
    this.branches = [];
    this.elseTemplates = [];
    let p;
    this.liquid.parser.parseStream(remainTokens).on("start", () => this.branches.push({
      predicate: new Value(tagToken.args, this.liquid),
      test: isFalsy,
      templates: p = []
    })).on("tag:elsif", (token2) => this.branches.push({
      predicate: new Value(token2.args, this.liquid),
      test: isTruthy,
      templates: p = []
    })).on("tag:else", () => p = this.elseTemplates).on("tag:endunless", function() {
      this.stop();
    }).on("template", (tpl) => p.push(tpl)).on("end", () => {
      throw new Error(`tag ${tagToken.getText()} not closed`);
    }).start();
  },
  render: function* (ctx, emitter) {
    const r = this.liquid.renderer;
    for (const { predicate, test, templates } of this.branches) {
      const value = yield predicate.value(ctx, ctx.opts.lenientIf);
      if (test(value, ctx)) {
        yield r.renderTemplates(templates, ctx, emitter);
        return;
      }
    }
    yield r.renderTemplates(this.elseTemplates, ctx, emitter);
  }
};
var Break = {
  render: function(ctx, emitter) {
    emitter["break"] = true;
  }
};
var Continue = {
  render: function(ctx, emitter) {
    emitter["continue"] = true;
  }
};
var echo = {
  parse: function(token2) {
    this.value = new Value(token2.args, this.liquid);
  },
  render: function* (ctx, emitter) {
    const val = yield this.value.value(ctx, false);
    emitter.write(val);
  }
};
var liquid = {
  parse: function(token2) {
    const tokenizer2 = new Tokenizer(token2.args, this.liquid.options.operatorsTrie);
    const tokens = tokenizer2.readLiquidTagTokens(this.liquid.options);
    this.tpls = this.liquid.parser.parseTokens(tokens);
  },
  render: function* (ctx, emitter) {
    yield this.liquid.renderer.renderTemplates(this.tpls, ctx, emitter);
  }
};
var inlineComment = {
  parse: function(tagToken, remainTokens) {
    if (tagToken.args.search(/\n\s*[^#\s]/g) !== -1) {
      throw new Error("every line of an inline comment must start with a '#' character");
    }
  }
};
const tags = {
  assign,
  "for": For,
  capture,
  "case": Case,
  comment,
  include,
  render,
  decrement,
  increment,
  cycle,
  "if": If,
  layout,
  block,
  raw,
  tablerow,
  unless,
  "break": Break,
  "continue": Continue,
  echo,
  liquid,
  "#": inlineComment
};
const filters = new Map();
forOwn(builtinFilters, (conf, name) => {
  filters.set(snakeCase(name), conf);
});
const defaultOptions = {
  root: ["."],
  layouts: ["."],
  partials: ["."],
  relativeReference: true,
  jekyllInclude: false,
  cache: void 0,
  extname: "",
  fs,
  dynamicPartials: true,
  jsTruthy: false,
  trimTagRight: false,
  trimTagLeft: false,
  trimOutputRight: false,
  trimOutputLeft: false,
  greedy: true,
  tagDelimiterLeft: "{%",
  tagDelimiterRight: "%}",
  outputDelimiterLeft: "{{",
  outputDelimiterRight: "}}",
  preserveTimezones: false,
  strictFilters: false,
  strictVariables: false,
  ownPropertyOnly: false,
  lenientIf: false,
  globals: {},
  keepOutputType: false,
  operators: defaultOperators,
  operatorsTrie: createTrie(defaultOperators)
};
function normalize(options2) {
  if (options2.hasOwnProperty("operators")) {
    options2.operatorsTrie = createTrie(options2.operators);
  }
  if (options2.hasOwnProperty("root")) {
    if (!options2.hasOwnProperty("partials"))
      options2.partials = options2.root;
    if (!options2.hasOwnProperty("layouts"))
      options2.layouts = options2.root;
  }
  if (options2.hasOwnProperty("cache")) {
    let cache;
    if (typeof options2.cache === "number")
      cache = options2.cache > 0 ? new LRU(options2.cache) : void 0;
    else if (typeof options2.cache === "object")
      cache = options2.cache;
    else
      cache = options2.cache ? new LRU(1024) : void 0;
    options2.cache = cache;
  }
  options2 = Object.assign(Object.assign(Object.assign({}, defaultOptions), options2.jekyllInclude ? { dynamicPartials: false } : {}), options2);
  if (!options2.fs.dirname && options2.relativeReference) {
    console.warn("[LiquidJS] `fs.dirname` is required for relativeReference, set relativeReference to `false` to suppress this warning, or provide implementation for `fs.dirname`");
    options2.relativeReference = false;
  }
  options2.root = normalizeDirectoryList(options2.root);
  options2.partials = normalizeDirectoryList(options2.partials);
  options2.layouts = normalizeDirectoryList(options2.layouts);
  options2.outputEscape = options2.outputEscape && getOutputEscapeFunction(options2.outputEscape);
  return options2;
}
function getOutputEscapeFunction(nameOrFunction) {
  if (isString(nameOrFunction)) {
    const filterImpl = filters.get(nameOrFunction);
    assert(isFunction(filterImpl), `filter "${nameOrFunction}" not found`);
    return filterImpl;
  } else {
    assert(isFunction(nameOrFunction), "`outputEscape` need to be of type string or function");
    return nameOrFunction;
  }
}
function normalizeDirectoryList(value) {
  let list = [];
  if (isArray(value))
    list = value;
  if (isString(value))
    list = [value];
  return list;
}
class Context {
  constructor(env = {}, opts = defaultOptions, renderOptions = {}) {
    var _a, _b;
    this.scopes = [{}];
    this.registers = {};
    this.sync = !!renderOptions.sync;
    this.opts = opts;
    this.globals = (_a = renderOptions.globals) !== null && _a !== void 0 ? _a : opts.globals;
    this.environments = env;
    this.strictVariables = (_b = renderOptions.strictVariables) !== null && _b !== void 0 ? _b : this.opts.strictVariables;
  }
  getRegister(key) {
    return this.registers[key] = this.registers[key] || {};
  }
  setRegister(key, value) {
    return this.registers[key] = value;
  }
  saveRegister(...keys) {
    return keys.map((key) => [key, this.getRegister(key)]);
  }
  restoreRegister(keyValues) {
    return keyValues.forEach(([key, value]) => this.setRegister(key, value));
  }
  getAll() {
    return [this.globals, this.environments, ...this.scopes].reduce((ctx, val) => __assign(ctx, val), {});
  }
  get(paths) {
    const scope = this.findScope(paths[0]);
    return this.getFromScope(scope, paths);
  }
  getFromScope(scope, paths) {
    if (isString(paths))
      paths = paths.split(".");
    return paths.reduce((scope2, path, i) => {
      scope2 = readProperty(scope2, path, this.opts.ownPropertyOnly);
      if (isNil(scope2) && this.strictVariables) {
        throw new InternalUndefinedVariableError(paths.slice(0, i + 1).join("."));
      }
      return scope2;
    }, scope);
  }
  push(ctx) {
    return this.scopes.push(ctx);
  }
  pop() {
    return this.scopes.pop();
  }
  bottom() {
    return this.scopes[0];
  }
  findScope(key) {
    for (let i = this.scopes.length - 1; i >= 0; i--) {
      const candidate = this.scopes[i];
      if (key in candidate)
        return candidate;
    }
    if (key in this.environments)
      return this.environments;
    return this.globals;
  }
}
function readProperty(obj, key, ownPropertyOnly) {
  if (isNil(obj))
    return obj;
  obj = toLiquid(obj);
  if (isArray(obj) && key < 0)
    return obj[obj.length + +key];
  const jsProperty = readJSProperty(obj, key, ownPropertyOnly);
  if (jsProperty === void 0 && obj instanceof Drop)
    return obj.liquidMethodMissing(key);
  if (isFunction(jsProperty))
    return jsProperty.call(obj);
  if (key === "size")
    return readSize(obj);
  else if (key === "first")
    return readFirst(obj);
  else if (key === "last")
    return readLast(obj);
  return jsProperty;
}
function readJSProperty(obj, key, ownPropertyOnly) {
  if (ownPropertyOnly && !Object.hasOwnProperty.call(obj, key))
    return void 0;
  return obj[key];
}
function readFirst(obj) {
  if (isArray(obj))
    return obj[0];
  return obj["first"];
}
function readLast(obj) {
  if (isArray(obj))
    return obj[obj.length - 1];
  return obj["last"];
}
function readSize(obj) {
  if (obj.hasOwnProperty("size") || obj["size"] !== void 0)
    return obj["size"];
  if (isArray(obj) || isString(obj))
    return obj.length;
  if (typeof obj === "object")
    return Object.keys(obj).length;
}
var LookupType;
(function(LookupType2) {
  LookupType2["Partials"] = "partials";
  LookupType2["Layouts"] = "layouts";
  LookupType2["Root"] = "root";
})(LookupType || (LookupType = {}));
class Loader {
  constructor(options2) {
    this.options = options2;
    if (options2.relativeReference) {
      const sep2 = options2.fs.sep;
      assert(sep2, "`fs.sep` is required for relative reference");
      const rRelativePath = new RegExp(["." + sep2, ".." + sep2, "./", "../"].map((prefix) => escapeRegex(prefix)).join("|"));
      this.shouldLoadRelative = (referencedFile) => rRelativePath.test(referencedFile);
    } else {
      this.shouldLoadRelative = (referencedFile) => false;
    }
    this.contains = this.options.fs.contains || (() => true);
  }
  *lookup(file, type, sync, currentFile) {
    const { fs: fs2 } = this.options;
    const dirs = this.options[type];
    for (const filepath of this.candidates(file, dirs, currentFile, type !== LookupType.Root)) {
      if (sync ? fs2.existsSync(filepath) : yield fs2.exists(filepath))
        return filepath;
    }
    throw this.lookupError(file, dirs);
  }
  *candidates(file, dirs, currentFile, enforceRoot) {
    const { fs: fs2, extname } = this.options;
    if (this.shouldLoadRelative(file) && currentFile) {
      const referenced = fs2.resolve(this.dirname(currentFile), file, extname);
      for (const dir of dirs) {
        if (!enforceRoot || this.contains(dir, referenced)) {
          yield referenced;
          break;
        }
      }
    }
    for (const dir of dirs) {
      const referenced = fs2.resolve(dir, file, extname);
      if (!enforceRoot || this.contains(dir, referenced)) {
        yield referenced;
      }
    }
    if (fs2.fallback !== void 0) {
      const filepath = fs2.fallback(file);
      if (filepath !== void 0)
        yield filepath;
    }
  }
  dirname(path) {
    const fs2 = this.options.fs;
    assert(fs2.dirname, "`fs.dirname` is required for relative reference");
    return fs2.dirname(path);
  }
  lookupError(file, roots) {
    const err = new Error("ENOENT");
    err.message = `ENOENT: Failed to lookup "${file}" in "${roots}"`;
    err.code = "ENOENT";
    return err;
  }
}
class SimpleEmitter {
  constructor() {
    this.buffer = "";
  }
  write(html2) {
    this.buffer += stringify(html2);
  }
}
class StreamedEmitter {
  constructor() {
    this.buffer = "";
    this.stream = null;
    throw new Error("streaming not supported in browser");
  }
}
class KeepingTypeEmitter {
  constructor() {
    this.buffer = "";
  }
  write(html2) {
    html2 = toValue(html2);
    if (typeof html2 !== "string" && this.buffer === "") {
      this.buffer = html2;
    } else {
      this.buffer = stringify(this.buffer) + stringify(html2);
    }
  }
}
class Render {
  renderTemplatesToNodeStream(templates, ctx) {
    const emitter = new StreamedEmitter();
    Promise.resolve().then(() => toPromise(this.renderTemplates(templates, ctx, emitter))).then(() => emitter.end(), (err) => emitter.error(err));
    return emitter.stream;
  }
  *renderTemplates(templates, ctx, emitter) {
    if (!emitter) {
      emitter = ctx.opts.keepOutputType ? new KeepingTypeEmitter() : new SimpleEmitter();
    }
    for (const tpl of templates) {
      try {
        const html2 = yield tpl.render(ctx, emitter);
        html2 && emitter.write(html2);
        if (emitter["break"] || emitter["continue"])
          break;
      } catch (e) {
        const err = RenderError.is(e) ? e : new RenderError(e, tpl);
        throw err;
      }
    }
    return emitter.buffer;
  }
}
class TemplateImpl {
  constructor(token2) {
    this.token = token2;
  }
}
class Tag extends TemplateImpl {
  constructor(token2, tokens, liquid2) {
    super(token2);
    this.name = token2.name;
    const impl = liquid2.tags.get(token2.name);
    this.impl = Object.create(impl);
    this.impl.liquid = liquid2;
    if (this.impl.parse) {
      this.impl.parse(token2, tokens);
    }
  }
  *render(ctx, emitter) {
    const hash = yield new Hash(this.token.args).render(ctx);
    const impl = this.impl;
    if (isFunction(impl.render))
      return yield impl.render(ctx, emitter, hash);
  }
}
class Output extends TemplateImpl {
  constructor(token2, liquid2) {
    super(token2);
    this.value = new Value(token2.content, liquid2);
    const filters2 = this.value.filters;
    const outputEscape = liquid2.options.outputEscape;
    if (filters2.length && filters2[filters2.length - 1].name === "raw") {
      filters2.pop();
    } else if (outputEscape) {
      filters2.push(new Filter(toString.call(outputEscape), outputEscape, [], liquid2));
    }
  }
  *render(ctx, emitter) {
    const val = yield this.value.value(ctx, false);
    emitter.write(val);
  }
}
class HTML extends TemplateImpl {
  constructor(token2) {
    super(token2);
    this.str = token2.getContent();
  }
  *render(ctx, emitter) {
    emitter.write(this.str);
  }
}
class Parser {
  constructor(liquid2) {
    this.liquid = liquid2;
    this.cache = this.liquid.options.cache;
    this.fs = this.liquid.options.fs;
    this.parseFile = this.cache ? this._parseFileCached : this._parseFile;
    this.loader = new Loader(this.liquid.options);
  }
  parse(html2, filepath) {
    const tokenizer2 = new Tokenizer(html2, this.liquid.options.operatorsTrie, filepath);
    const tokens = tokenizer2.readTopLevelTokens(this.liquid.options);
    return this.parseTokens(tokens);
  }
  parseTokens(tokens) {
    let token2;
    const templates = [];
    while (token2 = tokens.shift()) {
      templates.push(this.parseToken(token2, tokens));
    }
    return templates;
  }
  parseToken(token2, remainTokens) {
    try {
      if (isTagToken(token2)) {
        return new Tag(token2, remainTokens, this.liquid);
      }
      if (isOutputToken(token2)) {
        return new Output(token2, this.liquid);
      }
      return new HTML(token2);
    } catch (e) {
      throw new ParseError(e, token2);
    }
  }
  parseStream(tokens) {
    return new ParseStream(tokens, (token2, tokens2) => this.parseToken(token2, tokens2));
  }
  *_parseFileCached(file, sync, type = LookupType.Root, currentFile) {
    const cache = this.cache;
    const key = this.loader.shouldLoadRelative(file) ? currentFile + "," + file : type + ":" + file;
    const tpls = yield cache.read(key);
    if (tpls)
      return tpls;
    const task = this._parseFile(file, sync, type, currentFile);
    const taskOrTpl = sync ? yield task : toPromise(task);
    cache.write(key, taskOrTpl);
    try {
      return yield taskOrTpl;
    } catch (err) {
      cache.remove(key);
      throw err;
    }
  }
  *_parseFile(file, sync, type = LookupType.Root, currentFile) {
    const filepath = yield this.loader.lookup(file, type, sync, currentFile);
    return this.liquid.parse(sync ? this.fs.readFileSync(filepath) : yield this.fs.readFile(filepath), filepath);
  }
}
class TagMap {
  constructor() {
    this.impls = {};
  }
  get(name) {
    const impl = this.impls[name];
    assert(impl, () => `tag "${name}" not found`);
    return impl;
  }
  set(name, impl) {
    this.impls[name] = impl;
  }
}
class FilterMap {
  constructor(strictFilters, liquid2) {
    this.strictFilters = strictFilters;
    this.liquid = liquid2;
    this.impls = {};
  }
  get(name) {
    const impl = this.impls[name];
    assert(impl || !this.strictFilters, () => `undefined filter: ${name}`);
    return impl;
  }
  set(name, impl) {
    this.impls[name] = impl;
  }
  create(name, args) {
    return new Filter(name, this.get(name), args, this.liquid);
  }
}
class Liquid {
  constructor(opts = {}) {
    this.options = normalize(opts);
    this.parser = new Parser(this);
    this.renderer = new Render();
    this.filters = new FilterMap(this.options.strictFilters, this);
    this.tags = new TagMap();
    forOwn(tags, (conf, name) => this.registerTag(snakeCase(name), conf));
    forOwn(builtinFilters, (handler, name) => this.registerFilter(snakeCase(name), handler));
  }
  parse(html2, filepath) {
    return this.parser.parse(html2, filepath);
  }
  _render(tpl, scope, renderOptions) {
    const ctx = new Context(scope, this.options, renderOptions);
    return this.renderer.renderTemplates(tpl, ctx);
  }
  render(tpl, scope, renderOptions) {
    return __awaiter(this, void 0, void 0, function* () {
      return toPromise(this._render(tpl, scope, Object.assign(Object.assign({}, renderOptions), { sync: false })));
    });
  }
  renderSync(tpl, scope, renderOptions) {
    return toValueSync(this._render(tpl, scope, Object.assign(Object.assign({}, renderOptions), { sync: true })));
  }
  renderToNodeStream(tpl, scope, renderOptions = {}) {
    const ctx = new Context(scope, this.options, renderOptions);
    return this.renderer.renderTemplatesToNodeStream(tpl, ctx);
  }
  _parseAndRender(html2, scope, renderOptions) {
    const tpl = this.parse(html2);
    return this._render(tpl, scope, renderOptions);
  }
  parseAndRender(html2, scope, renderOptions) {
    return __awaiter(this, void 0, void 0, function* () {
      return toPromise(this._parseAndRender(html2, scope, Object.assign(Object.assign({}, renderOptions), { sync: false })));
    });
  }
  parseAndRenderSync(html2, scope, renderOptions) {
    return toValueSync(this._parseAndRender(html2, scope, Object.assign(Object.assign({}, renderOptions), { sync: true })));
  }
  _parsePartialFile(file, sync, currentFile) {
    return this.parser.parseFile(file, sync, LookupType.Partials, currentFile);
  }
  _parseLayoutFile(file, sync, currentFile) {
    return this.parser.parseFile(file, sync, LookupType.Layouts, currentFile);
  }
  parseFile(file) {
    return __awaiter(this, void 0, void 0, function* () {
      return toPromise(this.parser.parseFile(file, false));
    });
  }
  parseFileSync(file) {
    return toValueSync(this.parser.parseFile(file, true));
  }
  renderFile(file, ctx, renderOptions) {
    return __awaiter(this, void 0, void 0, function* () {
      const templates = yield this.parseFile(file);
      return this.render(templates, ctx, renderOptions);
    });
  }
  renderFileSync(file, ctx, renderOptions) {
    const templates = this.parseFileSync(file);
    return this.renderSync(templates, ctx, renderOptions);
  }
  renderFileToNodeStream(file, scope, renderOptions) {
    return __awaiter(this, void 0, void 0, function* () {
      const templates = yield this.parseFile(file);
      return this.renderToNodeStream(templates, scope, renderOptions);
    });
  }
  _evalValue(str, ctx) {
    const value = new Value(str, this);
    return value.value(ctx, false);
  }
  evalValue(str, ctx) {
    return __awaiter(this, void 0, void 0, function* () {
      return toPromise(this._evalValue(str, ctx));
    });
  }
  evalValueSync(str, ctx) {
    return toValueSync(this._evalValue(str, ctx));
  }
  registerFilter(name, filter) {
    this.filters.set(name, filter);
  }
  registerTag(name, tag) {
    this.tags.set(name, tag);
  }
  plugin(plugin) {
    return plugin.call(this, Liquid);
  }
  express() {
    const self = this;
    let firstCall = true;
    return function(filePath, ctx, callback) {
      if (firstCall) {
        firstCall = false;
        const dirs = normalizeDirectoryList(this.root);
        self.options.root.unshift(...dirs);
        self.options.layouts.unshift(...dirs);
        self.options.partials.unshift(...dirs);
      }
      self.renderFile(filePath, ctx).then((html2) => callback(null, html2), callback);
    };
  }
}
const Raw$1 = createBlock({
  name: "Raw",
  type: BasicType.RAW,
  create: (payload) => {
    const defaultData = {
      type: BasicType.RAW,
      data: {
        value: {
          content: ""
        }
      },
      attributes: {},
      children: []
    };
    return merge(defaultData, payload);
  },
  validParentType: [
    BasicType.PAGE,
    BasicType.POD_CUSTOM_PAGE,
    BasicType.WRAPPER,
    BasicType.SECTION,
    BasicType.GROUP,
    BasicType.COLUMN,
    BasicType.HERO
  ],
  render(params) {
    let data = params.data.data.value.content;
    if (params.data.attributes.renderInEditor) {
      const engine2 = new Liquid();
      data = engine2.parseAndRenderSync(data, params.dataSource);
    }
    return /* @__PURE__ */ React.createElement(BasicBlock, {
      params,
      tag: "mj-raw"
    }, data);
  }
});
const Template$1 = createBlock({
  name: "Template",
  type: BasicType.TEMPLATE,
  create: (payload) => {
    const defaultData = {
      type: BasicType.TEMPLATE,
      data: {
        value: {
          idx: ""
        }
      },
      attributes: {},
      children: []
    };
    return merge(defaultData, payload);
  },
  validParentType: [],
  render(params) {
    const { data } = params;
    return /* @__PURE__ */ React.createElement(React.Fragment, null, `
          ${data.children.map((child) => React.createElement(BlockRenderer, __spreadProps(__spreadValues({}, params), {
      data: child
    })))}
        `);
  }
});
const AccordionElement$1 = createBlock({
  name: "Accordion element",
  type: BasicType.ACCORDION_ELEMENT,
  create: (payload) => {
    const defaultData = {
      type: BasicType.ACCORDION_ELEMENT,
      data: {
        value: {}
      },
      attributes: {
        "icon-align": "middle",
        "icon-height": "32px",
        "icon-width": "32px",
        "icon-position": "right"
      },
      children: []
    };
    return merge(defaultData, payload);
  },
  validParentType: [BasicType.ACCORDION],
  render(params) {
    return /* @__PURE__ */ React.createElement(BasicBlock, {
      params,
      tag: "mj-accordion-element"
    });
  }
});
const AccordionTitle$1 = createBlock({
  name: "Accordion title",
  type: BasicType.ACCORDION_TITLE,
  create: (payload) => {
    const defaultData = {
      type: BasicType.ACCORDION_TITLE,
      data: {
        value: {
          content: "Why use an accordion?"
        }
      },
      attributes: {
        "font-size": "13px",
        padding: "16px 16px 16px 16px"
      },
      children: []
    };
    return merge(defaultData, payload);
  },
  validParentType: [BasicType.ACCORDION],
  render(params) {
    return /* @__PURE__ */ React.createElement(BasicBlock, {
      params,
      tag: "mj-accordion-title"
    }, params.data.data.value.content);
  }
});
const AccordionText$1 = createBlock({
  name: "Accordion text",
  type: BasicType.ACCORDION_TEXT,
  create: (payload) => {
    const defaultData = {
      type: BasicType.ACCORDION_TEXT,
      data: {
        value: {
          content: "Because emails with a lot of content are most of the time a very bad experience on mobile, mj-accordion comes handy when you want to deliver a lot of information in a concise way"
        }
      },
      attributes: {
        "font-size": "13px",
        padding: "16px 16px 16px 16px",
        "line-height": "1"
      },
      children: []
    };
    return merge(defaultData, payload);
  },
  validParentType: [BasicType.ACCORDION],
  render(params) {
    return /* @__PURE__ */ React.createElement(BasicBlock, {
      params,
      tag: "mj-accordion-text"
    }, params.data.data.value.content);
  }
});
const Accordion$1 = createBlock({
  name: "Accordion",
  type: BasicType.ACCORDION,
  validParentType: [BasicType.COLUMN],
  create: (payload) => {
    const defaultData = {
      type: BasicType.ACCORDION,
      data: {
        value: {}
      },
      attributes: {
        "icon-height": "32px",
        "icon-width": "32px",
        "icon-align": "middle",
        "icon-position": "right",
        "icon-unwrapped-url": getImg("IMAGE_09"),
        "icon-wrapped-url": getImg("IMAGE_10"),
        padding: "10px 25px 10px 25px",
        border: "1px solid #d9d9d9"
      },
      children: [
        AccordionElement$1.create({
          children: [
            AccordionTitle$1.create({
              data: {
                value: {
                  content: "Why use an accordion?"
                }
              }
            }),
            AccordionText$1.create({
              data: {
                value: {
                  content: "Because emails with a lot of content are most of the time a very bad experience on mobile, mj-accordion comes handy when you want to deliver a lot of information in a concise way."
                }
              }
            })
          ]
        }),
        AccordionElement$1.create({
          children: [
            AccordionTitle$1.create({
              data: {
                value: {
                  content: "How it works"
                }
              }
            }),
            AccordionText$1.create({
              data: {
                value: {
                  content: "Content is stacked into tabs and users can expand them at will. If responsive styles are not supported (mostly on desktop clients), tabs are then expanded and your content is readable at once."
                }
              }
            })
          ]
        })
      ]
    };
    return mergeBlock(defaultData, payload);
  },
  render(params) {
    return /* @__PURE__ */ React.createElement(BasicBlock, {
      params,
      tag: "mj-accordion"
    });
  }
});
const Table$1 = createBlock({
  name: "Table",
  type: BasicType.TABLE,
  create: (payload) => {
    const defaultData = {
      type: BasicType.TABLE,
      data: {
        value: {
          content: ""
        }
      },
      attributes: {},
      children: []
    };
    return merge(defaultData, payload);
  },
  validParentType: [BasicType.COLUMN],
  render(params) {
    const { data } = params;
    return /* @__PURE__ */ React.createElement(BasicBlock, {
      params,
      tag: "mj-table"
    }, data.data.value.content);
  }
});
function MjmlBlock({
  idx,
  value,
  type,
  attributes,
  children
}) {
  const { mode } = useEmailRenderContext();
  const block2 = BlockManager.getBlockByType(type);
  if (!block2) {
    throw new Error(`Can no find ${type}`);
  }
  const mergeValue = useMemo(() => {
    if (typeof children === "string") {
      if (!value) {
        return {
          content: children
        };
      } else {
        set(value, "content", children);
        return value;
      }
    }
    return value;
  }, [children, value]);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, block2.render({
    idx,
    mode,
    data: {
      type: block2.type,
      data: {
        value: mergeValue
      },
      attributes,
      children: []
    },
    children
  }));
}
function Text(props) {
  return /* @__PURE__ */ React.createElement(MjmlBlock, {
    attributes: omit(props, ["data", "children", "value"]),
    value: props.value,
    type: BasicType.TEXT
  }, props.children);
}
const CustomText = createBlock({
  name: "Editable Text",
  type: BasicType.CUSTOM_TEXT,
  create: (payload) => {
    const defaultData = {
      type: BasicType.CUSTOM_TEXT,
      data: {
        value: {
          content: "Type Something..."
        }
      },
      attributes: {
        mergeTagKey: "text",
        padding: "0px 0px 0px 0px"
      },
      children: []
    };
    return merge(defaultData, payload);
  },
  validParentType: [BasicType.COLUMN],
  render: ({ mode, data, idx }) => {
    return /* @__PURE__ */ React.createElement(Text, __spreadValues({
      "css-class": mode == "testing" ? getPreviewClassName(idx || null, data.type) : ""
    }, data.attributes), data.data.value.content);
  }
});
const EmptyPage = createBlock({
  name: "Empty Page",
  type: BasicType.EMPTY_PAGE,
  create: (payload) => {
    const defaultData = {
      type: BasicType.EMPTY_PAGE,
      data: {
        value: {}
      },
      attributes: {},
      children: []
    };
    return merge(defaultData, payload);
  },
  validParentType: [],
  render(params) {
    const { data } = params;
    return /* @__PURE__ */ React.createElement(React.Fragment, null, data.children.map((child, index2) => /* @__PURE__ */ React.createElement(BlockRenderer, __spreadProps(__spreadValues({}, params), {
      idx: getChildIdx(getPageIdx(), index2),
      key: index2,
      data: child
    }))));
  }
});
const PodCustomPage = createBlock({
  name: "Newsletter Page",
  type: BasicType.POD_CUSTOM_PAGE,
  create: (payload) => {
    const defaultData = {
      type: BasicType.POD_CUSTOM_PAGE,
      data: {
        value: {}
      },
      attributes: {},
      children: []
    };
    return merge(defaultData, payload);
  },
  validParentType: [],
  render(params) {
    throw Error("Not Implemented");
  }
});
const MJML$5 = `
  <mj-section padding="0px 16px" background-color="#F6F6F6" css-class="{{class}}">
    <mj-group css-class="container" background-color="#FFFFFF">
      <mj-column width="70%" padding="16px">
        <mj-text font-size="16px" line-height="24px" font-weight="700" color="#404040">{{title}}</mj-text>
        <mj-text font-size="14px" line-height="20px" color="#666666" font-weight="400">{{description}}...
          <a href="{{link}}" color="#0A71D1">more</a>
        </mj-text>
    </mj-column>
    {% if image %}
      <mj-column width="30%" padding="16px 16px 16px 0">
          <mj-hero
            mode="fixed-height"
            height="80px"
            background-color="#E9E9E9"
            background-url="{{image}}"
            border-radius="4px"
          ></mj-hero >
      </mj-column>
    {% endif %}
  </mj-group>
</mj-section>
`;
const engine$5 = new Liquid();
const News = createBlock({
  name: "News",
  type: BasicType.NEWS,
  create: (payload) => {
    const defaultData = {
      type: BasicType.NEWS,
      data: {
        value: {
          title: "Title",
          description: "Recusandae illum alias. Suscipit illo nulla nostrum explicabo pariatur a qui tenetur culpa. Repellendus",
          newsLink: "#",
          image: "http://res.cloudinary.com/dwkp0e1yo/image/upload/v1681283275/xq0ybcd1j77zfxeoz9up.png"
        }
      },
      attributes: {},
      children: []
    };
    return merge(defaultData, payload);
  },
  validParentType: [BasicType.WRAPPER, AdvancedType.WRAPPER, BasicType.POD_CUSTOM_PAGE],
  render(params) {
    const {
      data: { data, type },
      mode,
      idx
    } = params;
    const truncatedDescription = data.value.description.substring(0, 180);
    const mjmlData = __spreadProps(__spreadValues({
      title: data.value.title,
      description: truncatedDescription,
      link: data.value.newsLink
    }, data.value.image ? { image: data.value.image } : {}), {
      class: mode === "testing" && idx ? getPreviewClassName(idx, type) : ""
    });
    return engine$5.parseAndRenderSync(MJML$5, mjmlData);
  }
});
const MJML$4 = `
  <mj-section padding="0px 16px" background-color="#F6F6F6"  css-class="{{class}}">
    <mj-column css-class="container">
      <mj-text align="left" font-size="32px" line-height="42px" font-weight="700" color="#102825">{{heading}}</mj-text>
    </mj-column>
  </mj-section>
`;
const engine$4 = new Liquid();
const Heading = createBlock({
  name: "Heading",
  type: BasicType.HEADING,
  create: (payload) => {
    const defaultData = {
      type: BasicType.HEADING,
      data: {
        value: {
          heading: "Type your heading.."
        }
      },
      attributes: {},
      children: []
    };
    return merge(defaultData, payload);
  },
  validParentType: [BasicType.WRAPPER, AdvancedType.WRAPPER, BasicType.POD_CUSTOM_PAGE],
  render(params) {
    const {
      data: { data, type },
      mode,
      idx
    } = params;
    const mjmlData = {
      heading: data.value.heading,
      class: mode === "testing" && idx ? getPreviewClassName(idx, type) : ""
    };
    return engine$4.parseAndRenderSync(MJML$4, mjmlData);
  }
});
const MJML$3 = `
<mj-wrapper padding="0 16px" background-color="#F6F6F6" css-class="{{class}}" >
    <mj-section padding="16px" css-class="container" background-color="#FFFFFF">
        <mj-column width="100%">
          <mj-text font-size="16px" font-weight="700" color="#4F4F4F" line-height="24px" >
            {{title}}
          </mj-text>
          <mj-spacer height="5px"></mj-spacer>
          <mj-text font-size="14px" font-weight="400" color="#828282" line-height="20px">
              {{description}}
              <a href="{{link}}" style="color:#0A71D1">...more</a>
          </mj-text>
          <mj-spacer height="12px"></mj-spacer>
          <mj-hero
            mode="fixed-height"
            height="120px"
            background-color="#E9E9E9"
            background-url="{{image}}"
            border-radius="4px"
          ></mj-hero >
        </mj-column>
    </mj-section>
</mj-wrapper>
`;
const engine$3 = new Liquid();
const PostCard = createBlock({
  name: "Post",
  type: BasicType.POST_CARD,
  create: (payload) => {
    const defaultData = {
      type: BasicType.POST_CARD,
      data: {
        value: {
          title: "Title",
          description: "Recusandae illum alias. Suscipit illo nulla nostrum explicabo pariatur a qui tenetur culpa. Repellendus",
          postLink: "#",
          image: "http://res.cloudinary.com/dwkp0e1yo/image/upload/v1681283275/xq0ybcd1j77zfxeoz9up.png"
        }
      },
      attributes: {},
      children: []
    };
    return merge(defaultData, payload);
  },
  validParentType: [BasicType.WRAPPER, AdvancedType.WRAPPER, BasicType.POD_CUSTOM_PAGE],
  render(params) {
    const {
      data: { data, type },
      mode,
      idx
    } = params;
    const truncatedDescription = data.value.description.substring(0, 180);
    const mjmlData = __spreadProps(__spreadValues({
      title: data.value.title,
      description: truncatedDescription,
      link: data.value.postLink
    }, data.value.image ? { image: data.value.image } : {}), {
      class: mode === "testing" && idx ? getPreviewClassName(idx, type) : ""
    });
    return engine$3.parseAndRenderSync(MJML$3, mjmlData);
  }
});
const MJML$2 = `
<mj-wrapper padding="0 16px" background-color="#F6F6F6" css-class="{{class}}">
    <mj-section border-radius="8px 8px 0 0" background-color="#FFFFFF" padding="16px 16px 0" css-class="container">
        <mj-column>
            <mj-text font-size="20px" font-weight="500" line-height="32px" color="#222222">{{title}}</mj-text>
            <mj-spacer height="8px"></mj-spacer>
            <mj-text font-size="14px" font-weight="400" line-height="20px" color="#404040">{{description}}</mj-text>
            <mj-spacer height="20px"></mj-spacer>
        </mj-column>
    </mj-section>
    <mj-section border-radius="0 0 8px 8px" background-color="#FFFFFF" padding="0 16px 16px" css-class="container">
        <mj-group>
            <mj-column width="70%">
                <mj-social align="left" icon-size="42px" text-padding="0 0 0 12px">
                    <mj-social-element src="{{image}}" vertical-align="top" border-radius="30px" >
                        <p style=""margin: 0;font-size: 14px; line-height: 24px; font-weight: 500; color: #102825">
                            {{name}}
                        </p>
                        <p style="margin: 0; font-size: 12px; line-height: 16px; font-weight: 400; color: #666666">
                          {{designation}}
                        </p>
                    </mj-social-element>
                </mj-social>
            </mj-column>
            <mj-column width="29.9%">
              <mj-image padding-left="10px" src="{{signatureImage}}" width="84px" height="46px" align="right" />
            </mj-column>
        </mj-group>
    </mj-section>
</mj-wrapper>
`;
const engine$2 = new Liquid();
const ThankyouCard = createBlock({
  name: "Thank you card",
  type: BasicType.THANKYOU_CARD,
  create: (payload) => {
    const defaultData = {
      type: BasicType.THANKYOU_CARD,
      data: {
        value: {
          title: "Title",
          description: "Description",
          name: "Name",
          designation: "Designation",
          image: "#",
          signatureImage: "#"
        }
      },
      attributes: {},
      children: []
    };
    return merge(defaultData, payload);
  },
  validParentType: [BasicType.WRAPPER, AdvancedType.WRAPPER, BasicType.POD_CUSTOM_PAGE],
  render(params) {
    const {
      data: { data, type },
      mode,
      idx
    } = params;
    const mjmlData = __spreadProps(__spreadValues(__spreadValues({
      title: data.value.title,
      description: data.value.description,
      name: data.value.name,
      designation: data.value.designation
    }, data.value.image ? { image: data.value.image } : {}), data.value.signatureImage ? { signatureImage: data.value.signatureImage } : {}), {
      class: mode === "testing" && idx ? getPreviewClassName(idx, type) : ""
    });
    return engine$2.parseAndRenderSync(MJML$2, mjmlData);
  }
});
const MJML$1 = `
  <mj-section background-color="#F6F6F6" css-class="{{class}}">
    <mj-column css-class="container">
      <mj-button background-color="#E9E9E9" css-class="btn-block" innner-padding="6px 12px" href="{{link}}" border-radius="20px">
      <p style="display:inline-block;vertical-align:middle;margin: 0; color: #000000; font-size: 12px; font-weight: 400; line-height: 16px;">{{text}}</p>
      <p style="display:inline-block; vertical-align:middle;width: 16px; height: 16px; margin: 0">
        <img alt="right arrow" height="16" src="https://i.ibb.co/8g9pjDG/akar-icons-arrow-down-4.png" style="width: 100%; font-size: 0; line-height: 0; max-width: 16px; display: block;" width="16" />
      </p>
      </mj-button>
    </mj-column>
  </mj-section>
`;
const engine$1 = new Liquid();
const RoundedButton = createBlock({
  name: "Rounded Button",
  type: BasicType.ROUNDED_BUTTON,
  create: (payload) => {
    const defaultData = {
      type: BasicType.ROUNDED_BUTTON,
      data: {
        value: {
          text: "Button text",
          link: "#"
        }
      },
      attributes: {
        "inner-padding": "0px 0px 0px 0px",
        padding: "0px 0px 0px 0px"
      },
      children: []
    };
    return merge(defaultData, payload);
  },
  validParentType: [BasicType.WRAPPER, AdvancedType.WRAPPER, BasicType.POD_CUSTOM_PAGE],
  render(params) {
    const {
      data: { data, type },
      mode,
      idx
    } = params;
    const mjmlData = {
      text: data.value.text,
      link: data.value.link,
      class: mode === "testing" && idx ? getPreviewClassName(idx, type) : ""
    };
    return engine$1.parseAndRenderSync(MJML$1, mjmlData);
  }
});
var quoteImg = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzMiIGhlaWdodD0iMjYiIHZpZXdCb3g9IjAgMCAzMyAyNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggb3BhY2l0eT0iMC44IiBkPSJNMjAuNTY2NiAwLjc1NDMwMUgzMi4xOTkyVjguODE0NDVDMzIuMTk5MiAxMi4wNzU5IDMxLjkwOTQgMTQuNjQyNCAzMS4zMjk5IDE2LjUxMzdDMzAuNzIyNyAxOC40MTE4IDI5LjYxODggMjAuMTA5NCAyOC4wMTgxIDIxLjYwNjRDMjYuNDE3NCAyMy4xMDM1IDI0LjM3NTIgMjQuMjc5OCAyMS44OTEzIDI1LjEzNTNMMTkuNjE0NSAyMC40ODM2QzIxLjkzMjcgMTkuNzM1MSAyMy42MDI0IDE4LjY5MjUgMjQuNjIzNSAxNy4zNTU4QzI1LjYxNzEgMTYuMDE5MSAyNi4xNDE0IDE0LjI0MTQgMjYuMTk2NiAxMi4wMjI1SDIwLjU2NjZWMC43NTQzMDFaTTEuMTUxMzUgMC43NTQzMDFIMTIuNzg0VjguODE0NDVDMTIuNzg0IDEyLjEwMjcgMTIuNDk0MiAxNC42ODI1IDExLjkxNDYgMTYuNTUzOEMxMS4zMDc1IDE4LjQyNTEgMTAuMjAzNSAyMC4xMDk0IDguNjAyODQgMjEuNjA2NEM2Ljk3NDU1IDIzLjEwMzUgNC45MzIyOSAyNC4yNzk4IDIuNDc2MDYgMjUuMTM1M0wwLjE5OTIxOSAyMC40ODM2QzIuNTE3NDYgMTkuNzM1MSA0LjE4NzE0IDE4LjY5MjUgNS4yMDgyNyAxNy4zNTU4QzYuMjAxODEgMTYuMDE5MSA2LjcyNjE3IDE0LjI0MTQgNi43ODEzNyAxMi4wMjI1SDEuMTUxMzVWMC43NTQzMDFaIiBmaWxsPSIjNTUyMkQwIi8+Cjwvc3ZnPgo=";
var quoteInvertedImg = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDkiIGhlaWdodD0iMzgiIHZpZXdCb3g9IjAgMCA0OSAzOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggb3BhY2l0eT0iMC44IiBkPSJNMTcuNjQ4MSAzNy43NTQySDAuMTk5MjE5VjI1LjI3M0MwLjE5OTIxOSAyMC4yMjI1IDAuNjMzODg5IDE2LjI0ODQgMS41MDMyMyAxMy4zNTA2QzIuNDEzOTcgMTAuNDExNCA0LjA2OTg1IDcuNzgyNjcgNi40NzA4OSA1LjQ2NDQyQzguODcxOTIgMy4xNDYxOCAxMS45MzUzIDEuMzI0NzEgMTUuNjYxMSAwTDE5LjA3NjMgNy4yMDMxQzE1LjU5OSA4LjM2MjIzIDEzLjA5NDQgOS45NzY3MSAxMS41NjI3IDEyLjA0NjZDMTAuMDcyNCAxNC4xMTY0IDkuMjg1ODkgMTYuODY5MyA5LjIwMzEgMjAuMzA1M0gxNy42NDgxVjM3Ljc1NDJaTTQ2Ljc3MSAzNy43NTQySDI5LjMyMjFWMjUuMjczQzI5LjMyMjEgMjAuMTgxMSAyOS43NTY4IDE2LjE4NjMgMzAuNjI2MSAxMy4yODg1QzMxLjUzNjkgMTAuMzkwNyAzMy4xOTI3IDcuNzgyNjcgMzUuNTkzOCA1LjQ2NDQyQzM4LjAzNjIgMy4xNDYxOCA0MS4wOTk2IDEuMzI0NzEgNDQuNzg0IDBMNDguMTk5MiA3LjIwMzFDNDQuNzIxOSA4LjM2MjIzIDQyLjIxNzMgOS45NzY3MSA0MC42ODU2IDEyLjA0NjZDMzkuMTk1MyAxNC4xMTY0IDM4LjQwODggMTYuODY5MyAzOC4zMjYgMjAuMzA1M0g0Ni43NzFWMzcuNzU0MloiIGZpbGw9IiM1NTIyRDAiLz4KPC9zdmc+Cg==";
const MJML = `
<mj-wrapper background-color="#F6F6F6" css-class="{{class}}" >
    <mj-section padding="16px" css-class="container" background-color="#FFFFFF">
    <mj-group>
    {% if image %}
        <mj-column
            width="30%"
            padding="50px 16px 0 0"
        >
            <mj-hero
            mode="fixed-height"
            height="150px"
            background-color="#E9E9E9"
            background-url="{{image}}"
            background="no-repeat center center / cover"
            border-radius="4px"
          ></mj-hero>
        </mj-column>
    {% endif %}
        <mj-column {% if image %}width="70%"{% endif %}>
            <mj-image src={{quoteImg2}} width="48px" height="35px" align="left" />
            <mj-spacer height="8px"></mj-spacer>
            <mj-text font-size="18px" line-height="12px" font-weight="600" color="#404040">{{title}}</mj-text>
            <mj-spacer height="8px"></mj-spacer>
            <mj-text font-size="12px" font-weight="400" color="#828282">
            {{designation}}
            </mj-text>
            <mj-text width="100%" font-size="14px" padding="8px 0 0 0" line-height="20px" mj-class="text--md text--grey" color="#222">
                {{description}}
            </mj-text>
            <mj-spacer height="10px" />
            <mj-image mj-class="src-blockquote" width="36px" height="32px" src={{quoteImg1}} align="right" />
        </mj-column>
    </mj-group>
    </mj-section>
</mj-wrapper>
`;
const engine = new Liquid();
const QuoteCard = createBlock({
  name: "Quote",
  type: BasicType.QUOTE_CARD,
  create: (payload) => {
    const defaultData = {
      type: BasicType.QUOTE_CARD,
      data: {
        value: {
          title: "Selva Mathew",
          description: "The prodigious growth of digitisation has unequivocally contributed siginificantly to business success. Furthermore, the numerous benefits of the IIT bombay programme undeniably offer a guranteed carrer escalation, strong and invincible programs becomes paramount. IIT Bombay Programe in your carrier provide you with impeccable blend of theory.",
          designation: "HOD, Department of Design",
          image: "http://res.cloudinary.com/dwkp0e1yo/image/upload/v1681283275/xq0ybcd1j77zfxeoz9up.png",
          quoteImg,
          quoteInvertedImg
        }
      },
      attributes: {},
      children: []
    };
    return merge(defaultData, payload);
  },
  validParentType: [BasicType.WRAPPER, AdvancedType.WRAPPER, BasicType.POD_CUSTOM_PAGE],
  render(params) {
    const {
      data: { data, type },
      mode,
      idx
    } = params;
    const truncatedDescription = data.value.description.substring(0, 220);
    const mjmlData = __spreadProps(__spreadValues({
      title: data.value.title,
      description: truncatedDescription,
      designation: data.value.designation,
      quoteImg1: quoteImg,
      quoteImg2: quoteInvertedImg
    }, data.value.image ? { image: data.value.image } : {}), {
      class: mode === "testing" && idx ? getPreviewClassName(idx, type) : ""
    });
    return engine.parseAndRenderSync(MJML, mjmlData);
  }
});
const standardBlocks = {
  [BasicType.PAGE]: Page$1,
  [BasicType.SECTION]: Section$1,
  [BasicType.COLUMN]: Column$1,
  [BasicType.TEXT]: Text$1,
  [BasicType.IMAGE]: Image$1,
  [BasicType.GROUP]: Group$1,
  [BasicType.BUTTON]: Button$1,
  [BasicType.DIVIDER]: Divider$1,
  [BasicType.WRAPPER]: Wrapper$1,
  [BasicType.SPACER]: Spacer$1,
  [BasicType.RAW]: Raw$1,
  [BasicType.CAROUSEL]: Carousel$1,
  [BasicType.HERO]: Hero$1,
  [BasicType.NAVBAR]: Navbar$1,
  [BasicType.SOCIAL]: Social$1,
  [BasicType.TEMPLATE]: Template$1,
  [BasicType.ACCORDION]: Accordion$1,
  [BasicType.ACCORDION_ELEMENT]: AccordionElement$1,
  [BasicType.ACCORDION_TITLE]: AccordionTitle$1,
  [BasicType.ACCORDION_TEXT]: AccordionText$1,
  [BasicType.TABLE]: Table$1,
  [BasicType.CUSTOM_TEXT]: CustomText,
  [BasicType.EMPTY_PAGE]: EmptyPage,
  [BasicType.POD_CUSTOM_PAGE]: PodCustomPage,
  [BasicType.NEWS]: News,
  [BasicType.HEADING]: Heading,
  [BasicType.POST_CARD]: PostCard,
  [BasicType.ROUNDED_BUTTON]: RoundedButton,
  [BasicType.THANKYOU_CARD]: ThankyouCard,
  [BasicType.QUOTE_CARD]: QuoteCard
};
const createCustomBlock = createBlock;
function generateAdvancedBlock(option) {
  const baseBlock = Object.values(standardBlocks).find((b) => b.type === option.baseType);
  if (!baseBlock) {
    throw new Error(`Can not find ${option.baseType}`);
  }
  return createCustomBlock({
    name: baseBlock.name,
    type: option.type,
    validParentType: option.validParentType,
    create: (payload) => {
      const defaultData = __spreadProps(__spreadValues({}, baseBlock.create()), {
        type: option.type
      });
      return merge(defaultData, payload);
    },
    render: (params) => {
      const { data, idx, mode, context, dataSource } = params;
      const { iteration, condition } = data.data.value;
      const getBaseContent = (bIdx, index2) => option.getContent({
        index: index2,
        data,
        idx: bIdx,
        mode,
        context,
        dataSource
      });
      let children = getBaseContent(idx, 0);
      if (mode === "testing") {
        return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(React.Fragment, {
          key: "children"
        }, children), new Array(((iteration == null ? void 0 : iteration.mockQuantity) || 1) - 1).fill(true).map((_, index2) => /* @__PURE__ */ React.createElement(React.Fragment, {
          key: index2
        }, getBaseContent(idx, index2 + 1))));
      }
      if (condition && condition.enabled) {
        children = TemplateEngineManager.generateTagTemplate("condition")(condition, children);
      }
      if (iteration && iteration.enabled) {
        children = TemplateEngineManager.generateTagTemplate("iteration")(iteration, children);
      }
      return children;
    }
  });
}
var Operator;
(function(Operator2) {
  Operator2["TRUTHY"] = "truthy";
  Operator2["FALSY"] = "falsy";
  Operator2["EQUAL"] = "==";
  Operator2["NOT_EQUAL"] = "!=";
  Operator2["GREATER"] = ">";
  Operator2["GREATER_OR_EQUAL"] = ">=";
  Operator2["LESS"] = "<";
  Operator2["LESS_OR_EQUAL"] = "<=";
})(Operator || (Operator = {}));
var OperatorSymbol;
(function(OperatorSymbol2) {
  OperatorSymbol2["AND"] = "and";
  OperatorSymbol2["OR"] = "or";
})(OperatorSymbol || (OperatorSymbol = {}));
function Page(props) {
  return /* @__PURE__ */ React.createElement(MjmlBlock, {
    attributes: omit(props, ["data", "children", "value"]),
    value: props.value,
    type: BasicType.PAGE
  }, props.children);
}
function Section(props) {
  return /* @__PURE__ */ React.createElement(MjmlBlock, {
    attributes: omit(props, ["data", "children", "value"]),
    value: props.value,
    type: BasicType.SECTION
  }, props.children);
}
function Column(props) {
  return /* @__PURE__ */ React.createElement(MjmlBlock, {
    attributes: omit(props, ["data", "children", "value"]),
    value: props.value,
    type: BasicType.COLUMN
  }, props.children);
}
function Image(props) {
  return /* @__PURE__ */ React.createElement(MjmlBlock, {
    attributes: omit(props, ["data", "children", "value"]),
    value: props.value,
    type: BasicType.IMAGE
  }, props.children);
}
function Group(props) {
  return /* @__PURE__ */ React.createElement(MjmlBlock, {
    attributes: omit(props, ["data", "children", "value"]),
    value: props.value,
    type: BasicType.GROUP
  }, props.children);
}
function Button(props) {
  return /* @__PURE__ */ React.createElement(MjmlBlock, {
    attributes: omit(props, ["data", "children", "value"]),
    value: props.value,
    type: BasicType.BUTTON
  }, props.children);
}
function Divider(props) {
  return /* @__PURE__ */ React.createElement(MjmlBlock, {
    attributes: omit(props, ["data", "children", "value"]),
    value: props.value,
    type: BasicType.DIVIDER
  }, props.children);
}
function Wrapper(props) {
  return /* @__PURE__ */ React.createElement(MjmlBlock, {
    attributes: omit(props, ["data", "children", "value"]),
    value: props.value,
    type: BasicType.WRAPPER
  }, props.children);
}
function Spacer(props) {
  return /* @__PURE__ */ React.createElement(MjmlBlock, {
    attributes: omit(props, ["data", "children", "value"]),
    value: props.value,
    type: BasicType.SPACER
  }, props.children);
}
function Raw(props) {
  return /* @__PURE__ */ React.createElement(MjmlBlock, {
    attributes: omit(props, ["data", "children", "value"]),
    value: props.value,
    type: BasicType.RAW
  }, props.children);
}
function Accordion(props) {
  return /* @__PURE__ */ React.createElement(MjmlBlock, {
    attributes: omit(props, ["data", "children", "value"]),
    value: props.value,
    type: BasicType.ACCORDION
  }, props.children);
}
function AccordionElement(props) {
  return /* @__PURE__ */ React.createElement(MjmlBlock, {
    attributes: omit(props, ["data", "children", "value"]),
    value: props.value,
    type: BasicType.ACCORDION_ELEMENT
  }, props.children);
}
function AccordionTitle(props) {
  return /* @__PURE__ */ React.createElement(MjmlBlock, {
    attributes: omit(props, ["data", "children", "value"]),
    value: props.value,
    type: BasicType.ACCORDION_TITLE
  }, props.children);
}
function AccordionText(props) {
  return /* @__PURE__ */ React.createElement(MjmlBlock, {
    attributes: omit(props, ["data", "children", "value"]),
    value: props.value,
    type: BasicType.ACCORDION_TEXT
  }, props.children);
}
function Carousel(props) {
  return /* @__PURE__ */ React.createElement(MjmlBlock, {
    attributes: omit(props, ["data", "children", "value"]),
    value: props.value,
    type: BasicType.CAROUSEL
  }, props.children);
}
function Hero(props) {
  return /* @__PURE__ */ React.createElement(MjmlBlock, {
    attributes: omit(props, ["data", "children", "value"]),
    value: props.value,
    type: BasicType.HERO
  }, props.children);
}
function Navbar(props) {
  return /* @__PURE__ */ React.createElement(MjmlBlock, {
    attributes: omit(props, ["data", "children", "value"]),
    value: props.value,
    type: BasicType.NAVBAR
  }, props.children);
}
function Social(props) {
  return /* @__PURE__ */ React.createElement(MjmlBlock, {
    attributes: omit(props, ["data", "children", "value"]),
    value: props.value,
    type: BasicType.SOCIAL
  }, props.children);
}
function Table(props) {
  return /* @__PURE__ */ React.createElement(MjmlBlock, {
    attributes: omit(props, ["data", "children", "value"]),
    value: props.value,
    type: BasicType.TABLE
  }, props.children);
}
function Template(props) {
  return props.children;
}
var index = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  Page,
  Section,
  Column,
  Text,
  Image,
  Group,
  Button,
  Divider,
  Wrapper,
  Spacer,
  Raw,
  Accordion,
  AccordionElement,
  AccordionTitle,
  AccordionText,
  Carousel,
  Hero,
  Navbar,
  Social,
  Table,
  Template,
  BlockRenderer,
  MjmlBlock
});
function classnames(...rest) {
  return rest.filter((item) => typeof item === "string").join(" ");
}
function ancestorOf(type, targetType) {
  let level = -1;
  const paths = BlockManager.getAutoCompletePath(type, targetType);
  if (paths) {
    return paths.length + 1;
  }
  return level;
}
function getPageIdx() {
  return "content";
}
function getChildIdx(idx, index2) {
  return `${idx}.children.[${index2}]`;
}
function getNodeIdxClassName(idx) {
  return `node-idx-${idx}`;
}
function getNodeTypeClassName(type) {
  return `node-type-${type}`;
}
function getNodeIdxFromClassName(classList) {
  var _a;
  return (_a = Array.from(classList).find((item) => item.includes("node-idx-"))) == null ? void 0 : _a.replace("node-idx-", "");
}
function getNodeTypeFromClassName(classList) {
  var _a;
  return (_a = Array.from(isString$1(classList) ? classList.split(" ") : classList).find((item) => item.includes("node-type-"))) == null ? void 0 : _a.replace("node-type-", "");
}
const getIndexByIdx = (idx) => {
  var _a;
  return Number((_a = /\.\[(\d+)\]$/.exec(idx)) == null ? void 0 : _a[1]) || 0;
};
const getParentIdx = (idx) => {
  var _a;
  if (idx === getPageIdx())
    return void 0;
  return (_a = /(.*)\.children\.\[\d+\]$/.exec(idx)) == null ? void 0 : _a[1];
};
const getValueByIdx = (values, idx) => {
  return get(values, idx);
};
const getParentByIdx = (values, idx) => {
  return get(values, getParentIdx(idx) || "");
};
const getSiblingIdx = (sourceIndex, num) => {
  return sourceIndex.replace(/\[(\d+)\]$/, (_, index2) => {
    if (Number(index2) + num < 0)
      return "[0]";
    return `[${Number(index2) + num}]`;
  });
};
const getParentByType = (context, idx, type) => {
  if (!idx)
    return null;
  let parentIdx = getParentIdx(idx);
  while (parentIdx) {
    const parent = get(context, parentIdx);
    if (parent && parent.type === type)
      return parent;
    parentIdx = getParentIdx(idx);
  }
  return null;
};
const getSameParent = (values, idx, dragType) => {
  let parentIdx = idx;
  const block2 = BlockManager.getBlockByType(dragType);
  if (!block2)
    return null;
  while (parentIdx) {
    const parent = get(values, parentIdx);
    if (ancestorOf(block2.type, parent.type) > 0) {
      return {
        parent,
        parentIdx
      };
    }
    parentIdx = getParentIdx(parentIdx);
  }
  return null;
};
const getParenRelativeByType = (context, idx, type) => {
  let prevIdx = "";
  let parentIdx = idx;
  while (parentIdx) {
    const parent = get(context, parentIdx);
    if (parent && parent.type === type) {
      return {
        insertIndex: prevIdx ? getIndexByIdx(prevIdx) : parent.children.length - 1,
        parentIdx,
        parent
      };
    } else {
      prevIdx = parentIdx;
      parentIdx = getParentIdx(parentIdx);
    }
  }
  return null;
};
const getValidChildBlocks = (type) => {
  return BlockManager.getBlocks().filter((item) => item.validParentType.includes(type));
};
function getPreviewClassName(idx, type) {
  return classnames("email-block", idx && getNodeIdxClassName(idx), getNodeTypeClassName(type));
}
function generateAdvancedContentBlock(option) {
  return generateAdvancedBlock(__spreadProps(__spreadValues({}, option), {
    validParentType: [
      BasicType.PAGE,
      BasicType.POD_CUSTOM_PAGE,
      BasicType.WRAPPER,
      BasicType.COLUMN,
      BasicType.GROUP,
      BasicType.HERO,
      AdvancedType.WRAPPER,
      AdvancedType.COLUMN,
      AdvancedType.GROUP,
      AdvancedType.HERO
    ],
    getContent: (params) => {
      const { data, idx, mode, context, index: index2 } = params;
      const previewClassName = mode === "testing" ? classnames(index2 === 0 && idx && getPreviewClassName(idx, data.type)) : "";
      const blockData = __spreadProps(__spreadValues({}, data), {
        type: option.baseType,
        attributes: __spreadProps(__spreadValues({}, data.attributes), {
          "css-class": classnames(data.attributes["css-class"], previewClassName)
        })
      });
      const block2 = BlockManager.getBlockByType(blockData.type);
      if (!block2) {
        throw new Error(`Can not find ${blockData.type}`);
      }
      const children = block2 == null ? void 0 : block2.render(__spreadProps(__spreadValues({}, params), { data: blockData, idx }));
      const parentBlockData = getParentByIdx({ content: context }, idx);
      if (!parentBlockData) {
        return children;
      }
      if (parentBlockData.type === BasicType.PAGE || parentBlockData.type === BasicType.POD_CUSTOM_PAGE || parentBlockData.type === BasicType.WRAPPER || parentBlockData.type === AdvancedType.WRAPPER) {
        return /* @__PURE__ */ React.createElement(Section, {
          padding: "0px",
          "text-align": "left"
        }, /* @__PURE__ */ React.createElement(Column, null, children));
      }
      return children;
    }
  }));
}
function generateAdvancedLayoutBlock(option) {
  return generateAdvancedBlock(__spreadProps(__spreadValues({}, option), {
    getContent: (params) => {
      const { data, idx, mode, index: index2 } = params;
      const { iteration } = data.data.value;
      const blockData = __spreadProps(__spreadValues({}, data), {
        type: option.baseType
      });
      if (data.type === AdvancedType.COLUMN && (iteration == null ? void 0 : iteration.enabled)) {
        data.attributes.width = data.attributes.width || "100%";
      }
      const previewClassName = mode === "testing" ? classnames(index2 === 0 && idx && getPreviewClassName(idx, data.type)) : "";
      return /* @__PURE__ */ React.createElement(BlockRenderer, {
        idx: null,
        data: __spreadProps(__spreadValues({}, blockData), {
          attributes: __spreadProps(__spreadValues({}, blockData.attributes), {
            "css-class": classnames(data.attributes["css-class"], previewClassName)
          })
        })
      }, blockData.children.map((child, index22) => {
        return /* @__PURE__ */ React.createElement(BlockRenderer, __spreadProps(__spreadValues({
          key: index22
        }, params), {
          data: child,
          idx: idx ? getChildIdx(idx, index22) : null
        }));
      }));
    }
  }));
}
const AdvancedText = generateAdvancedContentBlock({
  type: AdvancedType.TEXT,
  baseType: BasicType.TEXT
});
const AdvancedButton = generateAdvancedContentBlock({
  type: AdvancedType.BUTTON,
  baseType: BasicType.BUTTON
});
const AdvancedImage = generateAdvancedContentBlock({
  type: AdvancedType.IMAGE,
  baseType: BasicType.IMAGE
});
const AdvancedDivider = generateAdvancedContentBlock({
  type: AdvancedType.DIVIDER,
  baseType: BasicType.DIVIDER
});
const AdvancedSpacer = generateAdvancedContentBlock({
  type: AdvancedType.SPACER,
  baseType: BasicType.SPACER
});
const AdvancedNavbar = generateAdvancedContentBlock({
  type: AdvancedType.NAVBAR,
  baseType: BasicType.NAVBAR
});
const AdvancedAccordion = generateAdvancedContentBlock({
  type: AdvancedType.ACCORDION,
  baseType: BasicType.ACCORDION
});
const AdvancedCarousel = generateAdvancedContentBlock({
  type: AdvancedType.CAROUSEL,
  baseType: BasicType.CAROUSEL
});
const AdvancedSocial = generateAdvancedContentBlock({
  type: AdvancedType.SOCIAL,
  baseType: BasicType.SOCIAL
});
const AdvancedWrapper = generateAdvancedLayoutBlock({
  type: AdvancedType.WRAPPER,
  baseType: BasicType.WRAPPER,
  validParentType: [BasicType.PAGE]
});
const AdvancedSection = generateAdvancedLayoutBlock({
  type: AdvancedType.SECTION,
  baseType: BasicType.SECTION,
  validParentType: [BasicType.PAGE, BasicType.WRAPPER, AdvancedType.WRAPPER]
});
const AdvancedGroup = generateAdvancedLayoutBlock({
  type: AdvancedType.GROUP,
  baseType: BasicType.GROUP,
  validParentType: [BasicType.SECTION, AdvancedType.SECTION]
});
const AdvancedColumn = generateAdvancedLayoutBlock({
  type: AdvancedType.COLUMN,
  baseType: BasicType.COLUMN,
  validParentType: [
    BasicType.SECTION,
    AdvancedType.SECTION,
    BasicType.GROUP,
    AdvancedType.GROUP
  ]
});
const AdvancedHero = generateAdvancedLayoutBlock({
  type: AdvancedType.HERO,
  baseType: BasicType.HERO,
  validParentType: [
    BasicType.WRAPPER,
    AdvancedType.WRAPPER,
    BasicType.PAGE
  ]
});
const advancedBlocks = {
  [AdvancedType.TEXT]: AdvancedText,
  [AdvancedType.BUTTON]: AdvancedButton,
  [AdvancedType.IMAGE]: AdvancedImage,
  [AdvancedType.DIVIDER]: AdvancedDivider,
  [AdvancedType.SPACER]: AdvancedSpacer,
  [AdvancedType.NAVBAR]: AdvancedNavbar,
  [AdvancedType.ACCORDION]: AdvancedAccordion,
  [AdvancedType.CAROUSEL]: AdvancedCarousel,
  [AdvancedType.SOCIAL]: AdvancedSocial,
  [AdvancedType.WRAPPER]: AdvancedWrapper,
  [AdvancedType.SECTION]: AdvancedSection,
  [AdvancedType.GROUP]: AdvancedGroup,
  [AdvancedType.COLUMN]: AdvancedColumn,
  [AdvancedType.HERO]: AdvancedHero
};
class BlockManager {
  static setAutoCompletePath() {
    const paths = {};
    const renderFullPath = (type, pathObj, prevPaths) => {
      const block2 = this.getBlockByType(type);
      if (!block2) {
        throw new Error(`Can you register ${type} block`);
      }
      const currentPaths = [...prevPaths, type];
      if (block2.validParentType.length === 0) {
        pathObj.push(currentPaths);
      }
      return block2.validParentType.map((item) => {
        return renderFullPath(item, pathObj, currentPaths);
      });
    };
    Object.values(this.blocksMap).forEach((item) => {
      paths[item.type] = [];
      renderFullPath(item.type, paths[item.type], []);
    });
    return paths;
  }
  static getBlocks() {
    return Object.values(this.blocksMap);
  }
  static registerBlocks(blocksMap) {
    this.blocksMap = __spreadValues(__spreadValues({}, this.blocksMap), blocksMap);
    this.autoCompletePath = this.setAutoCompletePath();
  }
  static getBlockByType(type) {
    return this.blocksMap[type];
  }
  static getBlocksByType(types) {
    return types.map((item) => {
      const block2 = Object.values(this.blocksMap).find((child) => {
        return child.type === item;
      });
      return block2;
    });
  }
  static getAutoCompleteFullPath() {
    if (Object.keys(this.autoCompletePath).length === 0) {
      this.autoCompletePath = this.setAutoCompletePath();
    }
    return this.autoCompletePath;
  }
  static getAutoCompletePath(type, targetType) {
    const block2 = this.getBlockByType(type);
    if (!block2) {
      throw new Error(`Can you register ${type} block`);
    }
    if (block2.validParentType.includes(targetType)) {
      return [];
    }
    const paths = this.getAutoCompleteFullPath()[type].find((item) => item.filter((_, index2) => index2 !== 0).includes(targetType));
    if (!paths)
      return null;
    const findIndex = paths.findIndex((item) => item === targetType);
    return paths.slice(1, findIndex);
  }
}
__publicField(BlockManager, "blocksMap", __spreadValues(__spreadValues({}, standardBlocks), advancedBlocks));
__publicField(BlockManager, "autoCompletePath", {});
function isValidBlockData(data) {
  try {
    if (data.attributes && data.children && data.data && data.type && BlockManager.getBlockByType(data.type)) {
      return true;
    }
  } catch (error) {
  }
  return false;
}
const domParser = new DOMParser();
function parseXMLtoBlock(text) {
  const dom = domParser.parseFromString(text, "text/xml");
  const root = dom.firstChild;
  if (!(dom.firstChild instanceof Element)) {
    throw new Error("Invalid content");
  }
  if (root.tagName === "mjml") {
    const { json: json2 } = mjml(text, {
      validationLevel: "soft"
    });
    const parseValue = MjmlToJson(json2);
    return parseValue;
  }
  const transform = (node) => {
    var _a;
    if (node.tagName === "parsererror") {
      throw new Error("Invalid content");
    }
    const attributes = {};
    node.getAttributeNames().forEach((name) => {
      attributes[name] = node.getAttribute(name);
    });
    const type = node.tagName.replace("mj-", "");
    if (!BlockManager.getBlockByType(type)) {
      if (!node.parentElement || node.parentElement.tagName !== "mj-text")
        throw new Error("Invalid content");
    }
    const block2 = {
      type,
      attributes,
      data: {
        value: {
          content: (_a = node.textContent) == null ? void 0 : _a.trim()
        }
      },
      children: [...node.children].filter((item) => item instanceof Element).map(transform)
    };
    switch (type) {
      case BasicType.CUSTOM_TEXT:
      case BasicType.TEXT:
        block2.data.value.content = node.innerHTML;
        block2.children = [];
    }
    return block2;
  };
  return transform(root);
}
function MjmlToJson(data) {
  if (isString$1(data))
    return parseXMLtoBlock(data);
  const transform = (item) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
    const attributes = item.attributes;
    switch (item.tagName) {
      case "mjml":
        const body = (_a = item.children) == null ? void 0 : _a.find((item2) => item2.tagName === "mj-body");
        const head = (_b = item.children) == null ? void 0 : _b.find((item2) => item2.tagName === "mj-head");
        const metaData = getMetaDataFromMjml(head);
        const fonts = ((_c = head == null ? void 0 : head.children) == null ? void 0 : _c.filter((child) => child.tagName === "mj-font").map((child) => ({
          name: child.attributes.name,
          href: child.attributes.href
        }))) || [];
        const mjAttributes = ((_e = (_d = head == null ? void 0 : head.children) == null ? void 0 : _d.find((item2) => item2.tagName === "mj-attributes")) == null ? void 0 : _e.children) || [];
        const headStyles = (_f = head == null ? void 0 : head.children) == null ? void 0 : _f.filter((item2) => item2.tagName === "mj-style").map((item2) => ({ content: item2.content, inline: item2.inline }));
        const headAttributes = [
          ...new Set(mjAttributes.filter((item2) => {
            const isFontFamily = item2.tagName === "mj-all" && item2.attributes["font-family"] === metaData["font-family"];
            const isTextColor = item2.tagName === "mj-text" && item2.attributes["color"] === metaData["text-color"];
            const isContentColor = ["mj-wrapper", "mj-section"].includes(item2.tagName) && item2.attributes["background-color"] === metaData["content-background-color"];
            return !isFontFamily && !isTextColor && !isContentColor;
          }).map((item2) => `<${item2.tagName} ${Object.keys(item2.attributes).map((key) => `${key}="${item2.attributes[key]}"`).join(" ")} />`))
        ].join("\n");
        const breakpoint = (_g = head == null ? void 0 : head.children) == null ? void 0 : _g.find((item2) => item2.tagName === "mj-breakpoint");
        return BlockManager.getBlockByType(BasicType.PAGE).create({
          attributes: body.attributes,
          children: (_h = body.children) == null ? void 0 : _h.map(transform),
          data: {
            value: __spreadValues({
              headAttributes,
              headStyles,
              fonts,
              breakpoint: breakpoint == null ? void 0 : breakpoint.attributes.breakpoint
            }, metaData)
          }
        });
      default:
        const tag = item.tagName.replace("mj-", "").toLowerCase();
        const block2 = BlockManager.getBlockByType(tag);
        if (!block2) {
          throw new Error(`${tag} block no found `);
        }
        const payload = {
          type: block2.type,
          attributes,
          data: {
            value: {}
          },
          children: []
        };
        if (item.content) {
          payload.data.value.content = item.content;
        }
        if (block2.type === BasicType.CAROUSEL) {
          payload.data.value.images = ((_i = item.children) == null ? void 0 : _i.map((child) => {
            return child.attributes;
          })) || [];
          payload.children = [];
        } else if (block2.type === BasicType.NAVBAR) {
          payload.data.value.links = ((_j = item.children) == null ? void 0 : _j.map((child) => {
            const navbarLinkData = __spreadProps(__spreadValues({
              color: "#1890ff",
              "font-size": "13px",
              target: "_blank",
              padding: "15px 10px"
            }, child.attributes), {
              content: child.content
            });
            formatPadding(navbarLinkData, "padding");
            return navbarLinkData;
          })) || [];
          payload.children = [];
        } else if (block2.type === BasicType.SOCIAL) {
          payload.data.value.elements = ((_k = item.children) == null ? void 0 : _k.map((child) => {
            return __spreadProps(__spreadValues({}, child.attributes), {
              content: child.content
            });
          })) || [];
          payload.children = [];
        } else if (block2.type === BasicType.CUSTOM_TEXT) {
          payload.data.value.content = ((_l = item.children) == null ? void 0 : _l.length) ? item.children[0].content : "";
        } else if (item.children) {
          payload.children = item.children.map(transform);
        }
        const blockData = block2.create(payload);
        formatPadding(blockData.attributes, "padding");
        return blockData;
    }
  };
  return transform(data);
}
function getMetaDataFromMjml(data) {
  var _a;
  const mjmlHtmlAttributes = (_a = data == null ? void 0 : data.children) == null ? void 0 : _a.filter((item) => item.tagName === "mj-html-attributes").map((item) => item.children).flat().filter((item) => item && item.attributes.class === "easy-email").reduce((obj, item) => {
    if (!item)
      return obj;
    const name = item.attributes["attribute-name"];
    const isMultipleAttributes = Boolean(item.attributes["multiple-attributes"]);
    obj[name] = isMultipleAttributes ? pickBy(__spreadProps(__spreadValues({}, item.attributes), {
      "attribute-name": void 0,
      "multiple-attributes": void 0,
      class: void 0
    }), identity) : item.attributes[name];
    return obj;
  }, {});
  return pickBy(mjmlHtmlAttributes, identity);
}
function formatPadding(attributes, attributeName) {
  const ele = document.createElement("div");
  Object.keys(attributes).forEach((key) => {
    var _a;
    if (new RegExp(`^${attributeName}`).test(key)) {
      const formatKey = (_a = new RegExp(`^${attributeName}(.*)`).exec(key)) == null ? void 0 : _a[0];
      if (formatKey) {
        ele.style[formatKey] = attributes[key];
        delete attributes[key];
      }
    }
  });
  const newPadding = [
    ele.style.paddingTop,
    ele.style.paddingRight,
    ele.style.paddingBottom,
    ele.style.paddingLeft
  ].filter(Boolean).join(" ");
  if (newPadding) {
    attributes[attributeName] = newPadding;
  }
}
function parseReactBlockToBlockData(node) {
  return JSON.parse(unescape$1(renderToStaticMarkup(node)));
}
function createBlockDataByType(type, payload) {
  const component = BlockManager.getBlockByType(type);
  if (component) {
    return component.create(payload);
  }
  throw new Error(`No match \`${type}\` block`);
}
let nanoid = (size2 = 21) => {
  let id = "";
  let bytes = crypto.getRandomValues(new Uint8Array(size2));
  while (size2--) {
    let byte = bytes[size2] & 63;
    if (byte < 36) {
      id += byte.toString(36);
    } else if (byte < 62) {
      id += (byte - 26).toString(36).toUpperCase();
    } else if (byte < 63) {
      id += "_";
    } else {
      id += "-";
    }
  }
  return id;
};
function generateIterationTemplate(option, content) {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Raw, null, `
        <!-- htmlmin:ignore -->
        {% for ${option.itemName} in ${option.dataSource} ${option.limit ? `limit:${option.limit}` : ""} %}
        <!-- htmlmin:ignore -->
        `), content, /* @__PURE__ */ React.createElement(Raw, null, " <!-- htmlmin:ignore -->{% endfor %}  <!-- htmlmin:ignore -->"));
}
function generateConditionTemplate(option, content) {
  const { symbol, groups } = option;
  const generateExpression = (condition) => {
    if (condition.operator === Operator.TRUTHY) {
      return condition.left;
    }
    if (condition.operator === Operator.FALSY) {
      return condition.left + " == nil";
    }
    return condition.left + " " + condition.operator + " " + (isNumber$1(condition.right) ? condition.right : `"${condition.right}"`);
  };
  const uuid = nanoid(5);
  const variables = groups.map((_, index2) => `con_${index2}_${uuid}`);
  const assignExpression = groups.map((item, index2) => {
    return `{% assign ${variables[index2]} = ${item.groups.map(generateExpression).join(` ${item.symbol} `)} %}`;
  }).join("\n");
  const conditionExpression = variables.join(` ${symbol} `);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Raw, null, `
        <!-- htmlmin:ignore -->
        ${assignExpression}
        {% if ${conditionExpression} %}
        <!-- htmlmin:ignore -->
        `), content, /* @__PURE__ */ React.createElement(Raw, null, `
        <!-- htmlmin:ignore -->
        {% endif %}
        <!-- htmlmin:ignore -->
        `));
}
class TemplateEngineManager {
  static setTag(option) {
    this.tags[option.name] = option.templateGenerateFn;
  }
  static generateTagTemplate(name) {
    return this.tags[name];
  }
}
__publicField(TemplateEngineManager, "tags", {
  iteration: generateIterationTemplate,
  condition: generateConditionTemplate
});
function isAdvancedBlock(type) {
  return Object.values(AdvancedType).includes(type);
}
function getAdapterAttributesString(params) {
  const { data, idx } = params;
  const isTest = params.mode === "testing";
  const attributes = __spreadValues({}, data.attributes);
  const keepClassName = isTest ? params.keepClassName : false;
  if (isTest && idx) {
    attributes["css-class"] = classnames(attributes["css-class"], EMAIL_BLOCK_CLASS_NAME, getNodeIdxClassName(idx), getNodeTypeClassName(data.type));
  }
  if (keepClassName) {
    attributes["css-class"] = classnames(attributes["css-class"], getNodeTypeClassName(data.type));
  }
  let attributeStr = "";
  for (let key in attributes) {
    const keyName = key;
    const val = attributes[keyName];
    if (isString$1(val) && val) {
      const splitter = " ";
      attributeStr += `${key}="${val.replace(/"/gm, "")}"` + splitter;
    }
  }
  return attributeStr;
}
export { AdvancedType, BasicType, BlockManager, EMAIL_BLOCK_CLASS_NAME, ImageManager, JsonToMjml, MERGE_TAG_CLASS_NAME, MjmlToJson, Operator, OperatorSymbol, TemplateEngineManager, advancedBlocks, ancestorOf, index as components, createBlock, createBlockDataByType, createCustomBlock, getAdapterAttributesString, getChildIdx, getIndexByIdx, getNodeIdxClassName, getNodeIdxFromClassName, getNodeTypeClassName, getNodeTypeFromClassName, getPageIdx, getParenRelativeByType, getParentByIdx, getParentByType, getParentIdx, getPreviewClassName, getSameParent, getSiblingIdx, getValidChildBlocks, getValueByIdx, isAdvancedBlock, isValidBlockData, mergeBlock, parseReactBlockToBlockData, standardBlocks };
//# sourceMappingURL=index.es.js.map
