export const Package= ({ packages }) => {
    console.log('Packages:', packages);
    return ( 
        <div className="mt-6">
        {packages.length > 0 && (
          <div>
            <h2 className="text-xl font-semibold mb-2">This order has the following packages:</h2>
            {packages.map((pack, idx) => (
              <div key={idx} className="mb-4 border p-4 rounded bg-gray-100">
                <p><strong>Package {idx + 1}</strong></p>
                <p>Items - {pack.items.join(",")}</p>
                <p>Total weight - {pack.totalWeight}g</p>
                <p>Total price - ${pack.totalPrice}</p>
                <p>Courier price - ${pack.courierPrice}</p>
              </div>
            ))}
          </div>
        )}
      </div>
     );
}

