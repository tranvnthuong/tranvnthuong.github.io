export class SocketHandler{constructor(e){this.socket=io(e,{transports:["websocket"]})}onConnect(e){this.socket.on("connect",e)}onConnectError(e){this.socket.on("connect_error",(s=>{e(s)}))}onDisconnect(e){this.socket.on("disconnect",e)}disConnect(){this.socket.io.opts.reconnection=!1,this.socket.disconnect()}joinAsAdmin(e,s){this.socket.emit("joinAsAdmin",e,(e=>{s(e)}))}adminSelectClient(e,s){this.socket.emit("adminSelectClient",e,(e=>{s(e)}))}onUserUpdated(e){this.socket.on("updateClientList",(s=>{e(s)}))}adminTyping(e){this.socket.emit("adminTyping",e)}adminSendMessage(e){this.socket.emit("adminMessage",e)}onUserTyping(e){this.socket.on("clientIsTyping",(s=>{e(s)}))}onUserMessage(e){this.socket.on("messageFromClient",(s=>{e(s)}))}updateNickname(e,s){this.socket.emit("updateNickname",e,(e=>{s(e)}))}unsendMessage(e){this.socket.emit("unsendMessage",e)}onMessageUnsend(e){this.socket.on("unsendCallback",(s=>{e(s)}))}registerUser(e,s){this.socket.emit("registerClient",e,(e=>{s(e)}))}userTyping(e){this.socket.emit("clientTyping",e)}userSendMessage(e){this.socket.emit("clientMessage",e)}onAdminTyping(e){this.socket.on("adminIsTyping",(s=>{e(s)}))}onAdminMessage(e){this.socket.on("messageFromAdmin",(s=>{e(s)}))}}