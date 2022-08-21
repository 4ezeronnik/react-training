import { Component } from "react";

export default class Reader extends Component {
    state = {
        index: 0
    };

    changeIndex = (value) => {
        this.setState(state => ({ index: state.index + value }));
    };

    render() {
        return (
            <div>
                <section>
                    <button type="button" onClick={() => this.changeIndex(-1)}>
                        Назад
                    </button>
                    <button type="button" onClick={() => this.changeIndex(1)}>
                        Вперед
                    </button>
                </section>

                <p>{this.state.index + 1}/{this.props.items.length}</p>

                {/* <article>
                    <h2>Lorem ipsum dolor sit amet</h2>
                    <p>
                        Lorem ipsum dolor sit amet consecteur adiplisicing elit. Temporibus,
                        molestiae dolore ipsa sed similique necessitatibus. Aut qui porro
                        quibusdam esse libero est eius, repellundus unde nihil, sequi
                        voluptate eaque officiis aliqam impedit laborum adipisci cumque
                        sit.
                    </p>
                </article> */}
            </div>
        );
    }
}