const build = require('../../src/app');

let app;

//
describe('Root route', () => {
  //
  beforeEach( async () => {
      app = build();
      await app.ready();
  });
  //
  afterEach(async () => {
    await app.close();
  });

  //
  //
  it('Root Route should return 200', async () => {
    const res = await app.inject({
      url: '/',
    });

    expect(res.statusCode).toBe(200);
    expect(res.json()).toEqual({ hello: 'world!' });
  });
});
