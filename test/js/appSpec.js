define(['app/cal'], function(cal) {

    describe('just checking', function() {

        it('works for app', function() {
            expect(cal.min(2, 1)).toEqual('2减1的结果为:1');
        });

    });

});
