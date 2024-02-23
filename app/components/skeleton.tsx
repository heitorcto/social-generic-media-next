export default function Skeleton() {
    return (
        <div className="container mx-auto flex justify-center my-12">
            <div className="card w-5/12 shadow-xl ">
                <div className="card-body">
                    <h2 className="card-title">
                        <div className="avatar">
                            <div className="w-12 rounded-full skeleton">
                            </div>
                        </div>
                        <div className="font-semibold text-md skeleton w-36 h-9"></div>
                    </h2>
                    <p className="mt-3 h-24 skeleton"></p>
                </div>
                <div className="ml-4 flex items-center gap-3 p-5">
                    <div>
                        <button className="btn btn-square skeleton">
                        </button>
                    </div>
                    <div>
                        <button className="btn skeleton w-28"></button>
                    </div>
                </div>
            </div>
        </div>
    );
}