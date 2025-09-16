interface ProductAvailabilityAndPolicyProps {
  amount?: number | null;
  warranty?: number | null;
}

export function ProductAvailabilityAndPolicy(props: ProductAvailabilityAndPolicyProps) {

  return (
    <div className="space-y-2 pt-4 border-t">
      <div className="flex items-center gap-2 text-sm">
        {!props.amount ?
          <>
            <span className="w-2 h-2 bg-red-500 rounded-full"></span>
            <span>Not available</span>
          </> :
          <>
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            <span>In stock - Ready to ship</span>
          </>
        }
      </div>
      <div className="flex items-center gap-2 text-sm">
        <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
        <span>30-day return policy</span>
      </div>
      {props.warranty ?
        <div className="flex items-center gap-2 text-sm">
          <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
          <span>{props.warranty}-month warranty included</span>
        </div> : null
      }
    </div>
  )
}