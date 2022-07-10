import { useForm } from "@inertiajs/inertia-react";
import React, { useEffect } from "react";

export default function Edit({ close, model }) {
    const { data, setData, put, reset, errors } = useForm({
        name: model.name,
        description: model.description,
    });

    const onChange = (e) => setData({ ...data, [e.target.id]: e.target.value });

    const onSubmit = (e) => {
        e.preventDefault();
        put(route("menuweb.update", model.id), {
            data,
            onSuccess: () => {
                reset(), close();
            },
        });
    };

    useEffect(() => {
        setData({
            ...data,
            name: model.name,
            description: model.description,
        });
    }, [model]);

    return (
        <>
            <form onSubmit={onSubmit}>
                <div className="modal-body">
                    <div className="form-group">
                        <label htmlFor="name" className="col-form-label">
                            Name:
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            name="name"
                            value={data.name}
                            onChange={onChange}
                            id="name"
                        />
                        {errors && (
                            <div className="text-danger mt-1">
                                {errors.name}
                            </div>
                        )}
                    </div>
                    <div className="form-group">
                        <label htmlFor="description" className="col-form-label">
                            Description:
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            name="description"
                            value={data.description}
                            onChange={onChange}
                            id="description"
                        />
                        {errors && (
                            <div className="text-danger mt-1">
                                {errors.description}
                            </div>
                        )}
                    </div>
                </div>
                <div className="modal-footer">
                    <button
                        type="button"
                        className="btn bg-gradient-secondary"
                        data-bs-dismiss="modal"
                    >
                        Close
                    </button>
                    <button type="submit" className="btn bg-gradient-primary">
                        Update
                    </button>
                </div>
            </form>
        </>
    );
}
