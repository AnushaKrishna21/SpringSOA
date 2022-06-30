public with sharing class PostManCallout {
    public static HttpResponse makeGetCallout() {
        Http http = new Http();
        HttpRequest req = new HttpRequest();
        /*Named credential PostManURL with URL : 'https://postman-echo.com'*/
        req.setEndpoint('callout:PostManURL/get?foo1=bar1&foo2=bar2');
        req.setMethod('GET');
        HttpResponse res = http.send(req);
        if (res.getStatusCode() == 200) {
            System.debug(res.getBody());
        }
        else{
            system.debug('HTTP Callout Failed::'+res);
        }
        return res;
    }
}
