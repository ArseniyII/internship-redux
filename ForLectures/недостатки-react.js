
    class App extends Component {
        render() {
            importantInfo = this.props;
            return (
                <div>
                    <SomeComponent1>
                        <SomeComponent2>
                            <SomeComponent3>
                                <SomeComponent4 someInfo={importantInfo}/>
                            </SomeComponent3>
                        </SomeComponent2>
                    </SomeComponent1>
                    <AnotherComponent1>
                        <AnotherComponent2>
                            <AnotherComponent3>
                                <AnotherComponent4 someInfo={importantInfo}/>
                            </AnotherComponent3>
                        </AnotherComponent2>
                    </AnotherComponent1>
                </div>
            )
        }
    }


