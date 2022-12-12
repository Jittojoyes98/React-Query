import { screen, render } from "@testing-library/react";

import Options from "../Options";

test("should Testing the Options", async () => {
  render(<Options optionType="scoops" />);

  const scoopImages = await screen.findAllByRole("img", { name: /scoop$/i });
  expect(scoopImages).toHaveLength(2);
  const altText = scoopImages.map((element) => element.alt);

  expect(altText).toEqual(["Chococlate scoop", "Vanilla scoop"]);
});
