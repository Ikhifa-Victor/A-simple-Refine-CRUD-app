import React from "react";
import { useNavigation, useSelect } from "@pankod/refine-core";
import { useForm } from "@pankod/refine-react-hook-form";

export const PostEdit = () => {
    const { list } = useNavigation();

    const {
        refineCore: { onFinish, formLoading, queryResult },
        register,
        handleSubmit,
        resetField,
        formState: { errors },
    } = useForm();
    return (
        <div style={{ padding: "16px" }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h1>Post Edit</h1>
                <div>
                    <button
                        className="flex items-center justify-between gap-1 rounded border border-gray-200 bg-indigo-500 p-2 text-xs font-medium leading-tight text-white transition duration-150 ease-in-out hover:bg-indigo-600"
                        onClick={() => {
                            list("posts");
                        }}
                    >
                        Posts List
                    </button>
                </div>
            </div>
            <form onSubmit={handleSubmit(onFinish)}>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "8px",
                    }}
                >
                    <label>
                        <span className="mb-2 block text-sm font-medium mr-2">Id</span>
                        <input
                            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm"
                            disabled
                            type="number"
                            {...register("id", {
                                required: "This field is required",
                            })}
                        />
                        <span style={{ color: "red" }}>
                            {(errors as any)?.id?.message as string}
                        </span>
                    </label>
                    <label>
                        <span className="mb-2 block text-sm font-medium mr-2">Title</span>
                        <input
                            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm"
                            type="text"
                            {...register("title", {
                                required: "This field is required",
                            })}
                        />
                        <span style={{ color: "red" }}>
                            {(errors as any)?.title?.message as string}
                        </span>
                    </label>
                    <label>
                        <span className="mb-2 block text-sm font-medium mr-2">Content</span>
                        <textarea
                            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm"
                            rows={5}
                            cols={33}
                            style={{ verticalAlign: "top" }}
                            {...register("content", {
                                required: "This field is required",
                            })}
                        />
                        <span style={{ color: "red" }}>
                            {(errors as any)?.content?.message as string}
                        </span>
                    </label>
                    <label>
                        <span className="mb-2 block text-sm font-medium mr-2">Status</span>
                        <input
                            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm"
                            type="text"
                            {...register("status", {
                                required: "This field is required",
                            })}
                        />
                        <span style={{ color: "red" }}>
                            {(errors as any)?.status?.message as string}
                        </span>
                    </label>
                    <label>
                        <span className="mb-2 block text-sm font-medium mr-2">Created At</span>
                        <input
                            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm"
                            {...register("createdAt", {
                                required: "This field is required",
                            })}
                        />
                        <span style={{ color: "red" }}>
                            {(errors as any)?.createdAt?.message as string}
                        </span>
                    </label>
                    <label>
                        <span className="mb-2 block text-sm font-medium mr-2">Published At</span>
                        <input
                            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm"
                            {...register("publishedAt", {
                                required: "This field is required",
                            })}
                        />
                        <span style={{ color: "red" }}>
                            {(errors as any)?.publishedAt?.message as string}
                        </span>
                    </label>
                    <div>
                        <input 
                            className="flex w-full items-center rounded-lg bg-indigo-500 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-indigo-600 sm:w-auto"
                            type="submit" value="Save" 
                        />
                    </div>
                </div>
            </form>
        </div>
    );
};
