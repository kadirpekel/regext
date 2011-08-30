require('./index.js')

exports.testSingle = function (test) {
  'Hello, World'.regext(/Hello, (P<subject>\w+)/, function (capture) {
    test.equal(capture.subject, 'World');
    test.done();
  });
}

exports.testMulti = function (test) {
  'clark kent'.regext(/^(P<firstname>\w+)\s(P<lastname>\w+)$/, function (capture) {
    test.equal(capture.firstname, 'clark');
    test.equal(capture.lastname, 'kent');
    test.done();
  });
}
