export default function Card({ img, title, desc, price }) {
    return (
        <div className=" rounded-md flex flex-col w-96 border-1 border-gray-300">
            <div className="img w-60">
                <img
                    src={img}
                    alt={title}
                    className="h-96 w-full object-cover rounded-md mb-3"
                />
            </div>
            <div className="px-3 pb-2">
                <h3 className="font-medium text-lg line-clamp-2">{title}</h3>
                <p className="text-sm text-gray-500 mb-2">{desc}</p>
                <p className="font-semibold text-base">₹{price}</p>
            </div>
        </div>
    )
}
