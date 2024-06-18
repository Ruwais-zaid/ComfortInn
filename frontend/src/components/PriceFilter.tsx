

type Props = {
  selectedPrice?: number;
  onChange: (value?: number) => void;
};

const PriceFilter = ({ selectedPrice, onChange }: Props) => {
  // Define the range limits
  const minPrice = 50;
  const maxPrice = 5000;

  return (
    <div>
      <h4 className="text-md font-semibold mb-2">Max Price</h4>
      <input
        type="range"
        className="p-2 w-full"
        min={minPrice}
        max={maxPrice}
        step={50} // Define the step interval for the slider
        value={selectedPrice ?? maxPrice} // Default to maxPrice if selectedPrice is undefined
        onChange={(event) =>
          onChange(event.target.value ? parseInt(event.target.value) : undefined)
        }
      />
      {/* Display the selected price */}
      <div className="mt-2 text-md font-medium">
        {selectedPrice ? `$${selectedPrice}` : `Select Max Price up to $${maxPrice}`}
      </div>
    </div>
  );
};

export default PriceFilter;
