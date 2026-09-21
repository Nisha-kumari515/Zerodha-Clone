function DropDownButton({ id, icon, title, items }) {
  return (
    <div className="accordion" id={`${id}Accordion`}>

      <div className="accordion-item mb-4">

        <h2 className="accordion-header">

          <button
            className="accordion-button collapsed "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={`#${id}`}
            aria-expanded="false"
            aria-controls={id}
          >
            {icon}
            {title}
          </button>

        </h2>

        <div
          id={id}
          className="accordion-collapse collapse"
          data-bs-parent={`#${id}Accordion`}
        >

          <div className="accordion-body ">

            <ul>
              {items.map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    style={{ textDecoration: "none" }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>

          </div>

        </div>

      </div>

    </div>
  );
}

export default DropDownButton;