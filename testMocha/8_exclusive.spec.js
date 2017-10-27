//the only表示会执行的用例。应用在describle上，有only的discrible才执行。应用在it用例上，有only的用例才执行
describe('exclusive_only', () => {
    describe.only('#indexOf()', () => {
      it.only('should return -1 unless present', () => {
          console.log('should run one');
        // this test will be run
      });
  
      it.only('should return the index when present', () => {
        // this test will also be run
        console.log('should run  two');
      });
  
      it('should return -1 if called with a non-Array context', () => {
        // this test will not be run
        console.log('exclusive three');
      });
    });

    describe('#slice()', function () {
        it('should return a new Array', function () {
          // this test will not be run
          console.log('this describle not run');
        });
      });

  });