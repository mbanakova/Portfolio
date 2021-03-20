import Icons from './Icons'

function Background() {
    let linesNumber = 20;
    let wrapper = [];

    for (let i = 0; i < linesNumber; i++) {
        wrapper.push(
            <div className="intro__bg-icons">
                <Icons />
                <Icons />
                <Icons />
            </div>
        )
    }
    return (
        wrapper
    )
}

export default Background
