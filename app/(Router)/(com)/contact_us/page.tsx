'use client'

import MediaLink from "@/app/gui/MediaLink";

export default function Page() {
    const handleSubmit = (e) => {
        e.preventDefault();

        // 获取表单数据
        const formData = new FormData(e.target);
        const subject: any = formData.get('subject');
        const body: any = formData.get('body');

        // 构造 mailto 链接
        const mailtoLink = `mailto:email@callha.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        // 打开 mailto 链接
        window.location.href = mailtoLink;
    };

    return (
        <div className="flex justify-center items-center">
            <div className=" text-white p-4  w-96 gap-2 flex-col flex max-w-2xl">
                <h1>联系我们</h1>
                <h2>email@callha.com</h2>
                <form onSubmit={handleSubmit} className="">
                    <div className="mb-2">
                        <label className="input input-bordered flex items-center gap-2 ">
                            主题:
                            <input type="text" name="subject" required placeholder="输入" className="grow" />
                        </label>
                    </div>
                    <div>
                        <textarea name="body" required className="textarea textarea-bordered w-full" placeholder="内容" />
                    </div>
                    <button type="submit" className="btn btn-neutral">发送</button>
                </form>
            </div>
        
        </div>
    );
}
