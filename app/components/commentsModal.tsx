export default function CommentsModal() {
    return (
        <>
            <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                    <section className="mb-1">
                        <textarea className="textarea w-full textarea-primary" placeholder="Say something..." required></textarea>
                        <div className="flex justify-end mt-1">
                            <button className="btn btn-primary">Place comment</button>
                        </div>
                    </section>

                    <h3 className="font-bold text-lg mb-5">All comments</h3>
                    <section className="border p-3 rounded-lg border-gray-600 my-3">
                        <div className="flex items-center gap-2">
                            <div className="avatar">
                                <div className="w-10 rounded-full">
                                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </div>
                            <div className="font-semibold">
                                USER NAME
                            </div>
                        </div>
                        <p className="py-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius rerum magni nulla tenetur quidem vitae, voluptate corrupti asperiores, ex labore veritatis nostrum, quas perferendis sequi alias maiores commodi magnam eaque?</p>
                    </section>

                    <h3 className="font-bold text-lg mb-5">No comments yet</h3>

                    <div className="modal-action">
                        <button className="btn" >Close</button>
                    </div>
                </div>
            </dialog>
            {/* <div className="bg-[#0006] dark:bg-bg-[#0006] fixed inset-0 z-40"></div> */}
        </>
    );
}