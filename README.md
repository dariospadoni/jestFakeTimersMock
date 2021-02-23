# jestFakeTimersMock

This is just a repo I created to test jest `useFakeTimers` and `setSystemTime` features.
 

As I read here https://dev.to/doctolib/mocking-the-system-clock-with-jest-4d38 I was expecting to mock the date by just using

```
beforeAll(() => {
  jest.useFakeTimers('modern')
  jest.setSystemTime(new Date('2017-01-01'))
})
```

However, in my case this does not seem to work and the date is not mocked unless I call `setSystemTime` in the `setupTests` file. 
