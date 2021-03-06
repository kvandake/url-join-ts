import { urlJoin, urlJoinP } from './urlJoinFunc';

describe('urlJoin', () => {
  it.each([['http'], ['https']])('urlJoin with %s protocol', protocol => {
    const baseUrl = `${protocol}://test.com`;
    expect(urlJoin(baseUrl)).toBe(`${baseUrl}`);
    expect(urlJoin(baseUrl, null)).toBe(`${baseUrl}`);
    expect(urlJoin(baseUrl, undefined)).toBe(`${baseUrl}`);
    expect(urlJoin(baseUrl, null, '1')).toBe(`${baseUrl}/1`);
    expect(urlJoin(baseUrl, undefined, '1')).toBe(`${baseUrl}/1`);
    expect(urlJoin(baseUrl, '')).toBe(`${baseUrl}`);
    expect(urlJoin(baseUrl, '1')).toBe(`${baseUrl}/1`);
    expect(urlJoin(baseUrl, '1/')).toEqual(`${baseUrl}/1`);
    expect(urlJoin(baseUrl, '/1')).toBe(`${baseUrl}/1`);
    expect(urlJoin(baseUrl, '1', '2')).toBe(`${baseUrl}/1/2`);
    expect(urlJoin(baseUrl, '1/2')).toBe(`${baseUrl}/1/2`);
  });

  it('urlJoin for path', () => {
    expect(urlJoin(undefined, '')).toBe(``);
    expect(urlJoin(undefined, '1')).toBe(`1`);
    expect(urlJoin(undefined, '/1')).toBe(`/1`);
    expect(urlJoin(undefined, '1', '/2/')).toBe(`1/2`);
    expect(urlJoin(undefined, '/1', '/2/')).toBe(`/1/2`);
    expect(urlJoin(undefined, '1', '/2', '3')).toBe(`1/2/3`);
    expect(urlJoin(undefined, '1', '/2', '/3/4/5/')).toBe(`1/2/3/4/5`);
  });

  it('urlJoin for localhost', () => {
    expect(urlJoin('http://localhost', '1')).toBe(`http://localhost/1`);
    expect(urlJoin('http://localhost', '/1')).toBe(`http://localhost/1`);
    expect(urlJoin('localhost', '1')).toBe(`localhost/1`);
    expect(urlJoin('http://0.0.0.0', '1')).toBe(`http://0.0.0.0/1`);
    expect(urlJoin('http://127.0.0.1', '1')).toBe(`http://127.0.0.1/1`);
  });

  it('urlJoinP with params', () => {
    const baseHttpUrl = 'http://test.com';
    expect(urlJoinP(baseHttpUrl, ['1'], { a: 1, b: 2 })).toBe(`${baseHttpUrl}/1?a=1&b=2`);
    expect(urlJoinP(baseHttpUrl, ['1'], { a: '1 2' })).toBe(`${baseHttpUrl}/1?a=1%202`);
    expect(urlJoinP(baseHttpUrl, ['1'], {})).toBe(`${baseHttpUrl}/1`);
    // @ts-ignore
    expect(urlJoinP(baseHttpUrl, ['1'], null)).toBe(`${baseHttpUrl}/1`);
    // @ts-ignore
    expect(urlJoinP(baseHttpUrl, ['1'], undefined)).toBe(`${baseHttpUrl}/1`);
  });
});
