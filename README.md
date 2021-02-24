# wanderlost-mobile-app

You will need an API running to emulate tile responses and enable you to observe tile requests
1. cd api
1. npm install
1. npm start

to test that the api is running
```curl http://localhost:3000```
And you should see hello world

Next you will need to get the mobile app running

See swift-app [README](/swift-app/README.md).

Then you will see a UI with a bunch of buttons.

1. Click Download
> and observe many tile requests to your api (expected)
2. Click Invalidate
> and observe message indicating that invalidate completed
> but also observe no tiles were requested from the api (not expected)
3. Click Resume
> again, observe no tiles were requested from the api (not expected)
