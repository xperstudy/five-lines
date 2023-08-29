import { update } from "../index"

describe('Game', function() {
  it('update test', function() {
    const expectedMap = [
        [ 2, 2, 2, 2, 2, 2, 2, 2 ],
        [ 2, 3, 0, 1, 1, 2, 0, 2 ],
        [ 2, 4, 2, 6, 1, 2, 0, 2 ],
        [ 2, 8, 4, 1, 1, 2, 0, 2 ],
        [ 2, 4, 1, 1, 1, 9, 0, 2 ],
        [ 2, 2, 2, 2, 2, 2, 2, 2 ]
      ];

    const resultMap = update();

    console.log("resultMap=",resultMap);

    expect(resultMap).toEqual(expectedMap);
  });
})
