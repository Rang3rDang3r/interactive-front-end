describe ("Calculator", function(){
    describe ("addition", function(){
        it("should return 42", function(){
            expect(addition(20, 22)) .toBe(42);
        })
        it("should return 26", function(){
            expect(addition(7, 19)) .toBe(26);
        })
        it("should return an error if we dont supply two numbers", function(){
            spyOn (window, "alert");
            addition("hithikers", "guide");
            expect(window.alert) .toHaveBeenCalledWith("Error");
        })
    })
})