import CardRow from "./CardRow.jsx"

export default function Events() {
    const items = [
        { img: "events/a.png", title: "prod 1", desc: "description", price: 5000 },
        { img: "events/b.jpg", title: "prod 1", desc: "description", price: 5000 },
        { img: "events/c.png", title: "prod 1", desc: "description", price: 5000 },
        { img: "events/d.jpg", title: "prod 1", desc: "description", price: 5000 },
        { img: "events/e.jpg", title: "prod 1", desc: "description", price: 5000 },
        { img: "events/f.jpg", title: "prod 1", desc: "description", price: 5000 },
        { img: "events/g.jpg", title: "prod 1", desc: "description", price: 5000 },
        { img: "events/h.jpg", title: "prod 1", desc: "description", price: 5000 },
        { img: "events/i.png", title: "prod 1", desc: "description", price: 5000 },
        { img: "events/j.jpg", title: "prod 1", desc: "description", price: 5000 },
        { img: "events/k.jpg", title: "prod 1", desc: "description", price: 5000 },
    ]

    return (
        <div className="p-6">
            <CardRow category="Events neat you" items={items} />
        </div>
    )
}
