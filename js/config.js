const ip = "10.10.28.76";
const port = "8010";
const protocolHttp = "http://";
const protocolHttps = "https://";
function getIp(){
    return ip;
}
function getBaseUrl(){
    return getProtocolHttp() + getIp() + ":" + getPort();
}
function getPort(){
    return port;
}
function getProtocolHttp(){
    return protocolHttp;


    // ————————————
}