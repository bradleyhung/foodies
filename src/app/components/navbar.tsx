import Image from "next/image";

export default function () {
  return (
    <nav>
      <Image
        src="/FoodiesImage.jpg"
        alt="Foodies Logo"
        width={100}
        height={100}
      />
    </nav>
  );
}
