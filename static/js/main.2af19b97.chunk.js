(this["webpackJsonputf-box"]=this["webpackJsonputf-box"]||[]).push([[0],[,,,,,,,function(e){e.exports=JSON.parse('{"name":"utf-box","version":"0.2.0","private":true,"homepage":"http://ConorDavenport.github.io/utf-box","dependencies":{"@testing-library/jest-dom":"^4.2.4","@testing-library/react":"^9.5.0","@testing-library/user-event":"^7.2.1","react":"^16.13.1","react-dom":"^16.13.1","react-scripts":"3.4.1"},"scripts":{"start":"react-scripts start","build":"react-scripts build","test":"react-scripts test","eject":"react-scripts eject","predeploy":"npm run build","deploy":"gh-pages -d build","build-start":"react-scripts build && react-scripts start"},"eslintConfig":{"extends":"react-app"},"browserslist":{"production":[">0.2%","not dead","not op_mini all"],"development":["last 1 chrome version","last 1 firefox version","last 1 safari version"]},"devDependencies":{"gh-pages":"^2.2.0"}}')},function(e,t,s){e.exports=s(16)},,,,,function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){"use strict";s.r(t);var c=s(0),n=s.n(c),o=s(6),r=s.n(o),i=(s(13),s(1)),a=s(2),l=s(4),h=s(3),u=(s(14),function(e){Object(l.a)(s,e);var t=Object(h.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(a.a)(s,[{key:"render",value:function(){return n.a.createElement("span",{className:"cell",onClick:this.props.onClick,onMouseEnter:this.props.onMouseEnter},this.props.value)}}]),s}(n.a.Component)),k=function(e){Object(l.a)(s,e);var t=Object(h.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(a.a)(s,[{key:"renderCell",value:function(e,t){var s=this;return n.a.createElement(u,{key:t,value:this.props.cells[e][t],onClick:function(){return s.props.onClick(e,t)},onMouseEnter:function(){return s.props.onMouseEnter(e,t)}})}},{key:"renderRow",value:function(e){for(var t=[],s=0;s<this.props.colNum;s++)t.push(this.renderCell(e,s));return t}},{key:"renderTable",value:function(){for(var e=[],t=0;t<this.props.rowNum;t++)e.push(n.a.createElement("div",{key:t,className:"row"},this.renderRow(t)));return e}},{key:"render",value:function(){return n.a.createElement("div",{className:"table"},this.renderTable())}}]),s}(n.a.Component),f=(s(15),s(7)),p=function(e){Object(l.a)(s,e);var t=Object(h.a)(s);function s(e){var c;Object(i.a)(this,s),(c=t.call(this,e)).rows=25,c.cols=50,c.leftmost=c.cols-1,c.prevLeftmost=c.leftmost.valueOf(),c.cells=Array(c.rows);for(var n=0;n<c.rows;n++)c.cells[n]=Array(c.cols).fill(null);return c.state={mouseDown:!1,select:"none",tool:"draw",row:c.rows,col:c.cols,cells:c.cells,key:" "},c}return Object(a.a)(s,[{key:"check",value:function(e){return!(null===e||e.charCodeAt(0)<128&&e.charCodeAt(0)>31)}},{key:"checkForLimits",value:function(e){return null!==e&&" "!==e}},{key:"updateCell",value:function(e,t,s,c){if("select"!==c){var n=Object.assign({},this.state).cells;if(!(e<=0||t<=0||e>=this.rows-1||t>=this.cols-1)&&(!1!==s||this.check(n[e][t]))){var o=n[e-1][t],r=n[e][t+1],i=n[e+1][t],a=n[e][t-1],l=null;if("draw"===c?l=!this.check(o)&&!this.check(i)||this.check(r)||this.check(a)?this.check(o)||this.check(i)||!this.check(r)&&!this.check(a)?!this.check(o)&&this.check(r)&&this.check(i)&&!this.check(a)?"\u250f":!this.check(o)&&!this.check(r)&&this.check(i)&&this.check(a)?"\u2513":this.check(o)&&this.check(r)&&!this.check(i)&&!this.check(a)?"\u2517":this.check(o)&&!this.check(r)&&!this.check(i)&&this.check(a)?"\u251b":this.check(o)&&this.check(r)&&this.check(i)&&!this.check(a)?"\u2523":this.check(o)&&!this.check(r)&&this.check(i)&&this.check(a)?"\u252b":!this.check(o)&&this.check(r)&&this.check(i)&&this.check(a)?"\u2533":this.check(o)&&this.check(r)&&!this.check(i)&&this.check(a)?"\u253b":this.check(o)&&this.check(r)&&this.check(i)&&this.check(a)?"\u254b":"\u2578":"\u2501":"\u2503":"erase"===c?l=t<this.leftmost?null:" ":"text"===c&&(l=this.state.key),n[e][t]=l,"erase"===c&&s)e:for(var h=0;h<this.cols;h++)for(var u=0;u<this.rows;u++)if(this.checkForLimits(n[u][h])||h===this.cols-1&&u===this.rows-1){this.prevLeftmost=this.leftmost.valueOf(),this.leftmost=h;break e}if("draw"===c&&t<this.leftmost){this.leftmost=t;for(var k=0;k<this.rows;k++)for(var f=this.leftmost;f<this.cols;f++)this.checkForLimits(n[k][f])||(n[k][f]=" ")}if(this.prevLeftmost<this.leftmost)for(var p=0;p<this.rows;p++)for(var d=0;d<this.leftmost;d++)n[p][d]=null;this.setState({cells:n})}}}},{key:"handleClick",value:function(e,t){this.updateCell(e,t,!0,this.state.tool),this.updateCell(e-1,t,!1,"draw"),this.updateCell(e+1,t,!1,"draw"),this.updateCell(e,t-1,!1,"draw"),this.updateCell(e,t+1,!1,"draw")}},{key:"handleMouseEnter",value:function(e,t){this.state.mouseDown&&this.handleClick(e,t)}},{key:"reset",value:function(){for(var e=Object.assign({},this.state).cells,t=0;t<this.rows;t++)for(var s=0;s<this.cols;s++)e[t][s]=null,this.setState({cells:e})}},{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"component-App",tabIndex:"0",style:{userSelect:this.state.select},onMouseUp:function(){e.setState({mouseDown:!1})},onMouseDown:function(){e.setState({mouseDown:!0})},onKeyDown:function(t){e.setState({key:String.fromCharCode(t.keyCode)})}},n.a.createElement("div",{className:"version-info"},"v",f.version),n.a.createElement(k,{tabIndex:"0",colNum:this.state.col,rowNum:this.state.row,cells:this.state.cells,onClick:function(t,s){return e.handleClick(t,s)},onMouseEnter:function(t,s){return e.handleMouseEnter(t,s)}}),n.a.createElement("button",{onClick:function(){e.setState({tool:"draw",select:"none"})}},"Draw"),n.a.createElement("button",{onClick:function(){e.setState({tool:"erase",select:"none"})}},"Erase"),n.a.createElement("button",{onClick:function(){e.setState({tool:"select",select:"auto"})}},"Select"),n.a.createElement("button",{onClick:function(){e.reset()}},"Reset"),n.a.createElement("button",{onClick:function(){e.setState({tool:"text",select:"none"})}},"Text"),n.a.createElement("div",{style:{color:"white"}},this.state.key))}}]),s}(n.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.2af19b97.chunk.js.map