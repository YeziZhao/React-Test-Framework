//the skip表示不会执行的用例。应用在describle上，有skip的discrible不执行。应用在it用例上，有skip的用例不执行

describe('exclusive_skip', () => {
    describe('#indexOf()', () => {

      it('should return -1 unless present', () => {
          console.log('skip should run one');
        // this test will be run
      });
  
      it('should return the index when present', () => {
        // this test will also be run
        console.log('skip should run  two');
      });
  
      it.skip('should return -1 if called with a non-Array context', () => {
        // this test will not be run
        console.log('skip exclusive three');
      });
    });

    describe.skip('#slice()', function () {
        it('should return a new Array', function () {
          // this test will not be run
          console.log('skip this describle not run');
        });
      });

  });