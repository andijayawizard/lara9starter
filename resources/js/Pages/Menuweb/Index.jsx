import { Link } from "@inertiajs/inertia-react";
import React, { useState } from "react";
import Dialog from "../../Components/Dashboard/Dialog";
import Base from "../../Layouts/Base";
import useDialog from "../../Hooks/useDialog";
import { Inertia } from "@inertiajs/inertia";
import Create from "../../Components/Dashboard/Menuweb/Create";
import Edit from "../../Components/Dashboard/Menuweb/Edit";

export default function Index(props) {
    const title = props.title;
    const { data: menuweb, links, meta } = props.menuweb;
    const [state, setState] = useState([]);
    const [
        addDialogHandler,
        addCloseTrigger,
        addTrigger,
        // UpdateDialogHandler,
        // UpdateCloseTrigger,
        // UpdateTrigger,
        // destroyDialogHandler,
        // destroyCloseTrigger,
        // destroyTrigger,
    ] = useDialog();
    const [UpdateDialogHandler, UpdateCloseTrigger, UpdateTrigger] =
        useDialog();
    const [destroyDialogHandler, destroyCloseTrigger, destroyTrigger] =
        useDialog();
    const openUpdateDialog = (menuweb) => {
        setState(menuweb);
        UpdateDialogHandler();
    };

    const openDestroyDialog = (menuweb) => {
        setState(menuweb);
        destroyDialogHandler();
    };

    const destroyMenuweb = () => {
        Inertia.delete(route("menuweb.destroy", state.id), {
            onSuccess: () => destroyCloseTrigger(),
        });
    };

    return (
        <>
            <div className="container-fluid py-4">
                <Dialog trigger={addTrigger} title={`Create New ${title}`}>
                    <Create close={addCloseTrigger} />
                </Dialog>

                <Dialog
                    trigger={UpdateTrigger}
                    title={`Update ${title}: ${state.name}`}
                >
                    <Edit model={state} close={UpdateCloseTrigger} />
                </Dialog>

                <Dialog
                    trigger={destroyTrigger}
                    title={`Delete ${title}: ${state.name}`}
                >
                    <p>Are you sure to delete this {title}?</p>
                    <div className="modal-footer">
                        <button
                            type="button"
                            className="btn bg-gradient-secondary"
                            data-bs-dismiss="modal"
                        >
                            Close
                        </button>
                        <button
                            type="submit"
                            onClick={destroyMenuweb}
                            className="btn bg-gradient-danger"
                        >
                            Delete
                        </button>
                    </div>
                </Dialog>

                <div className="row pb-4">
                    <div className="col-12 w-100">
                        <div className="card h-100 w-100">
                            <div className="card-header pb-0">
                                <div className="row">
                                    <div className="col-md-6">
                                        <h6>{title} table</h6>
                                    </div>
                                    <div className="col-md-6 d-flex justify-content-end">
                                        <button
                                            onClick={addDialogHandler}
                                            type="button"
                                            className="btn bg-gradient-success btn-block mb-3"
                                            data-bs-toggle="modal"
                                            data-bs-target="#exampleModalMessage"
                                        >
                                            Create New {title}
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body px-0 pt-0 pb-2">
                                <div
                                    className="table-responsive-xxl p-0"
                                    width="100%"
                                >
                                    <table
                                        className="table align-items-center justify-content-center mb-0"
                                        width="100%"
                                    >
                                        <thead>
                                            <tr>
                                                <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 text-centter">
                                                    #
                                                </th>
                                                <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2 text-left">
                                                    Name
                                                </th>
                                                <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2 text-left">
                                                    Description
                                                </th>
                                                <th className="text-uppercase text-secondary text-xxs font-weight-bolder text-left opacity-7 ps-2">
                                                    Published
                                                </th>
                                                <th className="text-uppercase text-secondary text-xxs font-weight-bolder text-center opacity-7 ps-2">
                                                    Actions
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {menuweb.map((menuweb, index) => (
                                                <tr key={menuweb.id}>
                                                    <td className="text-center">
                                                        {meta.from + index}
                                                    </td>
                                                    <td className="text-left">
                                                        <div className="d-flex px-2">
                                                            <div>
                                                                <img
                                                                    src="/img/team-2.jpg"
                                                                    className="avatar avatar-sm  me-3 "
                                                                />
                                                            </div>
                                                            <div className="my-auto">
                                                                <h6 className="mb-0 text-sm">
                                                                    {
                                                                        menuweb.name
                                                                    }
                                                                </h6>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="text-left">
                                                        <p className="text-sm font-weight-bold mb-0">
                                                            {
                                                                menuweb.description
                                                            }
                                                        </p>
                                                    </td>
                                                    <td className="text-left">
                                                        <span className="text-xs font-weight-bold">
                                                            {menuweb.isPub == 1
                                                                ? "yes"
                                                                : "no"}
                                                        </span>
                                                    </td>
                                                    <td
                                                        className="align-middle text-center"
                                                        width="10%"
                                                    >
                                                        <div>
                                                            <button
                                                                type="button"
                                                                onClick={() =>
                                                                    openUpdateDialog(
                                                                        menuweb
                                                                    )
                                                                }
                                                                className="btn btn-vimeo btn-icon-only mx-2"
                                                            >
                                                                <span className="btn-inner--icon">
                                                                    <i className="fas fa-pencil-alt"></i>
                                                                </span>
                                                            </button>
                                                            <button
                                                                type="button"
                                                                onClick={() =>
                                                                    openDestroyDialog(
                                                                        menuweb
                                                                    )
                                                                }
                                                                className="btn btn-youtube btn-icon-only"
                                                            >
                                                                <span className="btn-inner--icon">
                                                                    <i className="fas fa-trash"></i>
                                                                </span>
                                                            </button>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <nav aria-label="Page navigation example">
                    <ul className="pagination justify-content-center">
                        {meta.links.map((link, k) => (
                            <li key={k} className="page-item">
                                <Link
                                    disabled={link.url == null ? true : false}
                                    as="button"
                                    className={`${link.active && "bg-info"} ${
                                        link.url == null &&
                                        "btn bg-gradient-secondary text-white"
                                    } page-link`}
                                    href={link.url || ""}
                                    dangerouslySetInnerHTML={{
                                        __html: link.label,
                                    }}
                                />
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </>
    );
}

Index.layout = (page) => (
    <Base key={page} children={page} title={`Manage Menu Website`} />
);
