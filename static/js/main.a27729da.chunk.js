(this["webpackJsonpgoogle-meet"]=this["webpackJsonpgoogle-meet"]||[]).push([[0],{35:function(e,t,n){},41:function(e,t,n){},43:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){"use strict";n.r(t),n.d(t,"store",(function(){return Z}));var r=n(2),a=n.n(r),c=n(21),i=n.n(c),s=(n(35),n(18)),o=n(7),u=n(11),d=n.n(u),p=n(13),f=n(29),l=n(19),v=n(15),j=n(28),b=(n(41),n(6)),m=function(e){var t=Object(r.useState)({mic:!0,video:!1,screen:!1}),n=Object(f.a)(t,2),a=n[0],c=n[1],i=function(e){c((function(t){return Object(o.a)(Object(o.a)({},t),{},{screen:e})}))};return Object(r.useEffect)((function(){e.onMicClick(a.mic)}),[a.mic]),Object(r.useEffect)((function(){e.onVideoClick(a.video)}),[a.video]),Object(b.jsxs)("div",{className:"meeting-footer",children:[Object(b.jsx)("div",{className:"meeting-icons "+(a.mic?"":"active"),"data-tip":a.mic?"Mute Audio":"Unmute Audio",onClick:function(){c((function(e){return Object(o.a)(Object(o.a)({},e),{},{mic:!e.mic})}))},children:Object(b.jsx)(l.a,{icon:a.mic?v.b:v.c,title:"Mute"})}),Object(b.jsx)("div",{className:"meeting-icons "+(a.video?"":"active"),"data-tip":a.video?"Hide Video":"Show Video",onClick:function(){c((function(e){return Object(o.a)(Object(o.a)({},e),{},{video:!e.video})}))},children:Object(b.jsx)(l.a,{icon:a.video?v.d:v.e})}),Object(b.jsx)("div",{className:"meeting-icons","data-tip":"Share Screen",onClick:function(){e.onScreenClick(i)},disabled:a.screen,children:Object(b.jsx)(l.a,{icon:v.a})}),Object(b.jsx)(j.a,{})]})},O=(n(43),n(14)),h=(n(45),function(e){return Object(b.jsx)("div",{className:"card",children:e.children})}),g=(n(46),function(e){var t=e.curentIndex,n=e.currentParticipant,r=e.hideVideo,a=e.videoRef,c=e.showAvatar,i=e.currentUser;return n?Object(b.jsx)("div",{className:"participant ".concat(r?"hide":""),children:Object(b.jsxs)(h,{children:[Object(b.jsx)("video",{ref:a,className:"video",id:"participantVideo".concat(t),autoPlay:!0,playsInline:!0}),!n.audio&&Object(b.jsx)(l.a,{className:"muted",icon:v.c,title:"Muted"}),c&&Object(b.jsx)("div",{style:{background:n.avatarColor},className:"avatar",children:n.name[0]}),Object(b.jsxs)("div",{className:"name",children:[n.name,i?"(You)":""]})]})}):Object(b.jsx)(b.Fragment,{})}),y=Object(O.b)((function(e){return{participants:e.participants,currentUser:e.currentUser,stream:e.mainStream}}))((function(e){var t=Object(r.useRef)(null),n=Object.keys(e.participants);Object(r.useEffect)((function(){t.current&&(t.current.srcObject=e.stream,t.current.muted=!0)}),[e.currentUser,e.stream]);var a=e.currentUser?Object.values(e.currentUser)[0]:null,c=1===n.length?1:n.length<=4?2:4,i=n.length<=4?1:2,s=n.length<=4?n.length:Math.ceil(n.length/2),o=n.find((function(t){return e.participants[t].screen}));o&&(c=1,s=2);var u=n.map((function(t,n){var r=e.participants[t];if(r.currentUser)return null;var a=r.peerConnection,c=new MediaStream,i=n;return a&&(a.ontrack=function(e){e.streams[0].getTracks().forEach((function(e){c.addTrack(e)}));var t=document.getElementById("participantVideo".concat(i));t&&(t.srcObject=c)}),Object(b.jsx)(g,{currentParticipant:r,curentIndex:i,hideVideo:o&&o!==t,showAvatar:!r.video&&!r.screen&&r.name},i)}));return Object(b.jsxs)("div",{style:{"--grid-size":c,"--grid-col-size":i,"--grid-row-size":s},className:"participants",children:[u,Object(b.jsx)(g,{currentParticipant:a,curentIndex:n.length,hideVideo:o&&!a.screen,videoRef:t,showAvatar:a&&!a.video&&!a.screen,currentUser:!0})]})})),x=(n(47),"SET_MAIN_STREAM"),U="ADD_PARTICIPANT",w="REMOVE_PARTICIPANT",k="SET_USER",C="UPDATE_USER",S="UPDATE_PARTICIPANT",I=function(e){return{type:x,payload:{mainStream:e}}},T=Object(O.b)((function(e){return{stream:e.mainStream,participants:e.participants,currentUser:e.currentUser}}),(function(e){return{setMainStream:function(t){return e(I(t))},updateUser:function(t){return e(function(e){return{type:C,payload:{currentUser:e}}}(t))}}}))((function(e){var t=Object(r.useRef)(e.participants);Object(r.useEffect)((function(){t.current=e.participants}),[e.participants]);var n=function(n){for(var r in t.current){var a=t.current[r];if(!a.currentUser)a.peerConnection.getSenders().find((function(e){return!!e.track&&"video"===e.track.kind})).replaceTrack(n.getVideoTracks()[0])}e.setMainStream(n)},a=function(){var t=Object(p.a)(d.a.mark((function t(){var r;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,navigator.mediaDevices.getUserMedia({audio:!0,video:!0});case 2:(r=t.sent).getVideoTracks()[0].enabled=Object.values(e.currentUser)[0].video,n(r),e.updateUser({screen:!1});case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),c=function(){var t=Object(p.a)(d.a.mark((function t(){var r;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!navigator.getDisplayMedia){t.next=6;break}return t.next=3,navigator.getDisplayMedia({video:!0});case 3:r=t.sent,t.next=15;break;case 6:if(!navigator.mediaDevices.getDisplayMedia){t.next=12;break}return t.next=9,navigator.mediaDevices.getDisplayMedia({video:!0});case 9:r=t.sent,t.next=15;break;case 12:return t.next=14,navigator.mediaDevices.getUserMedia({video:{mediaSource:"screen"}});case 14:r=t.sent;case 15:r.getVideoTracks()[0].onended=a,n(r),e.updateUser({screen:!0});case 18:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(b.jsxs)("div",{className:"wrapper",children:[Object(b.jsx)("div",{className:"main-screen",children:Object(b.jsx)(y,{})}),Object(b.jsx)("div",{className:"footer",children:Object(b.jsx)(m,{onScreenClick:c,onMicClick:function(t){e.stream&&(e.stream.getAudioTracks()[0].enabled=t,e.updateUser({audio:t}))},onVideoClick:function(t){e.stream&&(e.stream.getVideoTracks()[0].enabled=t,e.updateUser({video:t}))}})})]})})),M=n(22);M.a.initializeApp({apiKey:"AIzaSyC78-pB8Rs9aF3-L032uSx4n02YB4YEZhg",databaseURL:"https://visio-app-a31a0-default-rtdb.europe-west1.firebasedatabase.app/"});var N=M.a,P=M.a.database().ref(),A=prompt("What's your name?"),D=new URLSearchParams(window.location.search).get("id");D?P=P.child(D):(P=P.push(),window.history.replaceState(null,"Meet","?id="+P.key));var R=P;n(53);var E=Object(O.b)((function(e){return{stream:e.mainStream,user:e.currentUser}}),(function(e){return{setMainStream:function(t){return e(I(t))},addParticipant:function(t){return e(function(e){return{type:U,payload:{newUser:e}}}(t))},setUser:function(t){return e(function(e){return{type:k,payload:{currentUser:e}}}(t))},removeParticipant:function(t){return e(function(e){return{type:w,payload:{id:e}}}(t))},updateParticipant:function(t){return e(function(e){return{type:S,payload:{newUser:e}}}(t))}}}))((function(e){var t=function(){var e=Object(p.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,navigator.mediaDevices.getUserMedia({audio:!0,video:!0});case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(r.useEffect)(Object(p.a)(d.a.mark((function r(){var c;return d.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,t();case 2:(c=r.sent).getVideoTracks()[0].enabled=!1,e.setMainStream(c),n.on("value",(function(t){if(t.val()){var n={audio:!0,video:!1,screen:!1},r=a.push({userName:A,preferences:n});e.setUser(Object(s.a)({},r.key,Object(o.a)({name:A},n))),r.onDisconnect().remove()}}));case 6:case"end":return r.stop()}}),r)}))),[]);var n=N.database().ref(".info/connected"),a=R.child("participants"),c=!!e.user,i=!!e.stream;return Object(r.useEffect)((function(){i&&c&&(a.on("child_added",(function(t){a.child(t.key).child("preferences").on("child_changed",(function(n){e.updateParticipant(Object(s.a)({},t.key,Object(s.a)({},n.key,n.val())))}));var n=t.val(),r=n.userName,c=n.preferences,i=void 0===c?{}:c;e.addParticipant(Object(s.a)({},t.key,Object(o.a)({name:r},i)))})),a.on("child_removed",(function(t){e.removeParticipant(t.key)})))}),[i,c]),Object(b.jsx)("div",{className:"App",children:Object(b.jsx)(T,{})})})),V=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,57)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),r(e),a(e),c(e),i(e)}))},_=n(30),z=R.child("participants"),L=function(e,t){var n=z.child(e).child("preferences");setTimeout((function(){n.update(t)}))},F=function(){var e=Object(p.a)(d.a.mark((function e(t,n,r){var a,c,i;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=z.child(n),t.onicecandidate=function(e){e.candidate&&a.child("offerCandidates").push(Object(o.a)(Object(o.a)({},e.candidate.toJSON()),{},{userId:r}))},e.next=4,t.createOffer();case 4:return c=e.sent,e.next=7,t.setLocalDescription(c);case 7:return i={sdp:c.sdp,type:c.type,userId:r},e.next=10,a.child("offers").push().set({offer:i});case 10:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),B=function(){var e=Object(p.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(n=z.child(t)).child("offers").on("child_added",function(){var e=Object(p.a)(d.a.mark((function e(n){var r,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(null===(r=n.val())||void 0===r?void 0:r.offer)){e.next=7;break}return a=Z.getState().participants[r.offer.userId].peerConnection,e.next=5,a.setRemoteDescription(new RTCSessionDescription(r.offer));case 5:return e.next=7,J(r.offer.userId,t);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),n.child("offerCandidates").on("child_added",(function(e){var t=e.val();t.userId&&Z.getState().participants[t.userId].peerConnection.addIceCandidate(new RTCIceCandidate(t))})),n.child("answers").on("child_added",(function(e){var t=e.val();if(null===t||void 0===t?void 0:t.answer){var n=Z.getState().participants[t.answer.userId].peerConnection,r=new RTCSessionDescription(t.answer);n.setRemoteDescription(r)}})),n.child("answerCandidates").on("child_added",(function(e){var t=e.val();t.userId&&Z.getState().participants[t.userId].peerConnection.addIceCandidate(new RTCIceCandidate(t))}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),J=function(){var e=Object(p.a)(d.a.mark((function e(t,n){var r,a,c,i;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=Z.getState().participants[t].peerConnection,a=z.child(t),r.onicecandidate=function(e){e.candidate&&a.child("answerCandidates").push(Object(o.a)(Object(o.a)({},e.candidate.toJSON()),{},{userId:n}))},e.next=5,r.createAnswer();case 5:return c=e.sent,e.next=8,r.setLocalDescription(c);case 8:return i={type:c.type,sdp:c.sdp,userId:n},e.next=11,a.child("answers").push().set({answer:i});case 11:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),Y={mainStream:null,participants:{},currentUser:null},H={iceServers:[{urls:["stun:stun1.l.google.com:19302","stun:stun2.l.google.com:19302","stun:stun.l.google.com:19302","stun:stun3.l.google.com:19302","stun:stun4.l.google.com:19302","stun:stun.services.mozilla.com"]}],iceCandidatePoolSize:10},K=function(){return"#"+Math.floor(16777215*Math.random()).toString(16)},W=function(e,t,n){var r=new RTCPeerConnection(H);n.getTracks().forEach((function(e){r.addTrack(e,n)}));var a=Object.keys(e)[0],c=Object.keys(t)[0],i=[a,c].sort((function(e,t){return e.localeCompare(t)}));return e[a].peerConnection=r,i[0]!==c&&F(r,i[0],i[1]),e},Z=Object(_.a)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,t=arguments.length>1?arguments[1]:void 0;if(t.type===x){var n=t.payload;return e=Object(o.a)(Object(o.a)({},e),n)}if(t.type===U){var r=t.payload,a=Object.keys(e.currentUser)[0],c=Object.keys(r.newUser)[0];e.mainStream&&a!==c&&(r.newUser=W(r.newUser,e.currentUser,e.mainStream)),a===c&&(r.newUser[c].currentUser=!0),r.newUser[c].avatarColor=K();var i=Object(o.a)(Object(o.a)({},e.participants),r.newUser);return e=Object(o.a)(Object(o.a)({},e),{},{participants:i})}if(t.type===k){var s=t.payload,u=Object(o.a)({},e.participants),d=Object.keys(s.currentUser)[0];return s.currentUser[d].avatarColor=K(),B(d),e=Object(o.a)(Object(o.a)({},e),{},{currentUser:Object(o.a)({},s.currentUser),participants:u})}if(t.type===w){var p=t.payload,f=Object(o.a)({},e.participants);return delete f[p.id],e=Object(o.a)(Object(o.a)({},e),{},{participants:f})}if(t.type===C){var l=t.payload,v=Object.keys(e.currentUser)[0];return L(v,l.currentUser),e.currentUser[v]=Object(o.a)(Object(o.a)({},e.currentUser[v]),l.currentUser),e=Object(o.a)(Object(o.a)({},e),{},{currentUser:Object(o.a)({},e.currentUser)})}if(t.type===S){var j=t.payload,b=Object.keys(j.newUser)[0];j.newUser[b]=Object(o.a)(Object(o.a)({},e.participants[b]),j.newUser[b]);var m=Object(o.a)(Object(o.a)({},e.participants),j.newUser);return e=Object(o.a)(Object(o.a)({},e),{},{participants:m})}return e}));i.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(O.a,{store:Z,children:Object(b.jsx)(E,{})})}),document.getElementById("root")),V()}},[[54,1,2]]]);
//# sourceMappingURL=main.a27729da.chunk.js.map