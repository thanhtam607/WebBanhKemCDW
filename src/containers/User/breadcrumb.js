import React from "react";

const Breadcrumb = ({ items }) => {
    // Tìm mục active
    const activeItem = items.find(item => item.active);

    return (
        <div className="container-fluid page-header py-5">
            <h1 className="text-center text-white display-6">
                {activeItem ? activeItem.title : ""}
            </h1>
            <ol className="breadcrumb justify-content-center mb-0">
                {items.map((item, index) => (
                    <li key={index} className={`breadcrumb-item ${item.active ? 'active text-white' : ''}`}>
                        {item.active ? (
                            item.title
                        ) : (
                            <a className="text-yellow" href={item.link}>{item.title}</a>
                        )}
                    </li>
                ))}
            </ol>
        </div>
    );
};

export default Breadcrumb;
