describe("Pyramid", () => {
  it("Should print pyramid", () => {
    assert.equal(pyramid(3), "  #  \n ### \n#####\n");
    assert.equal(_pyramid(3), "  #  \n ### \n#####\n");
  });
});
