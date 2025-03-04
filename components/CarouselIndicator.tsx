const CarouselIndicator = ({
  current,
  total,
}: {
  current: number;
  total: number;
}) => {
  return (
    <div className="flex gap-3 justify-center pt-4 ">
      {Array.from({ length: total }).map((_, index) => (
        <div key={index}>
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              width="12"
              height="12"
              rx="6"
              fill={current === index ? "#FDFBF6" : "#A9C8D3"}
            />
          </svg>
        </div>
      ))}
    </div>
  );
};

export default CarouselIndicator;
