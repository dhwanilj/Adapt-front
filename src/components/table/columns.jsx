export const columns = [
  {
    header: "Category",
    cell: ({ row }) => (
      <div>
        <p className="font-bold">{row.original.name}</p>
        <p className="text-gray-400">{row.original.subtext}</p>
      </div>
    ),
  },
  {
    header: "Quantity",
    cell: ({ row }) => <p>{parseFloat(row.original.quantity).toFixed(2)}</p>,
  },
  {
    header: "Unit Price",
    cell: ({ row }) => <p>{row.original.unitPrice}</p>,
  },
  {
    header: "Total",
    cell: ({ row }) => (
      <p>
        {(
          Number(parseFloat(row.original.quantity).toFixed(2)) *
          Number(row.original.unitPrice)
        ).toFixed(2)}
      </p>
    ),
  },
];
