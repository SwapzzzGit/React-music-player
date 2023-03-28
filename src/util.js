import { v4 as uuidv4 } from "uuid";

function chillHop() {
  return [
    {
      name: "Delicate",
      cover:
        "https://chillhop.com/wp-content/uploads/2023/02/ef337196272ee56d2e76383d39ed446b57472aec-1024x1024.jpg",
      artist: "Henry Gritton",
      id: uuidv4(),
      color: ["#BA4A46", "FDF0DD"],
      active: true,
      audio: "https://mp3.chillhop.com/serve.php/?mp3=49367",
    },
    {
      name: "Jazz Cabbage",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/06/49f6e32ca521fbad46a1b281e3893cf6254bf11d-1024x1024.jpg",
      artist: "Ian Ewing, Strehlow",
      id: uuidv4(),
      color: ["#BA4A46", "FDF0DD"],
      active: false,
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9363",
    },
  ];
}
export default chillHop;
