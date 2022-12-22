import { Input } from "./components/Input"
import { Buton } from "./components/Button"
import { Container, Content, Row } from "./styles"
import { useState } from "react"

const App = () => {
  const [CurrentNumber, setCurrentNumber] = useState('0')
  const [FirstNumber, setFirstNumber] = useState('0')
  const [Operation, setOperation] = useState('')

  const HandleAddNumber = (number) => {
    setCurrentNumber((prev) => `${prev === "0" ? "" : prev}${number}`)
  }

  const HandleOnClear = () => {
    setCurrentNumber("0")
    setFirstNumber("0")
    setOperation("")
  }

  const HandleSumNumbers = () => {
      if (FirstNumber === "0"){
        setFirstNumber(String(CurrentNumber))
        setCurrentNumber("0")
        setOperation("+")
      } else {
        const cal = Number(FirstNumber) + Number(CurrentNumber)
        setCurrentNumber(String(cal))
        setOperation("")
      }
  }

  const HandleMinusNumbers = () => {
      if (FirstNumber === "0"){
        setFirstNumber(String(CurrentNumber))
        setCurrentNumber("0")
        setOperation("-")
      } else {
        const cal = Number(FirstNumber) - Number(CurrentNumber)
        setCurrentNumber(String(cal))
        setOperation("")
      }
  }

  const HandleMultiplyNumbers = () => {
      if (FirstNumber === "0"){
        setFirstNumber(String(CurrentNumber))
        setCurrentNumber("0")
        setOperation("*")
      } else {
        const cal = Number(FirstNumber) * Number(CurrentNumber)
        setCurrentNumber(String(cal))
        setOperation("")
      }
  }

  const HandleDivideNumbers = () => {
      if (FirstNumber === "0"){
        setFirstNumber(String(CurrentNumber))
        setCurrentNumber("0")
        setOperation("/")
      } else {
        const cal = Number(FirstNumber) / Number(CurrentNumber)
        setCurrentNumber(String(cal))
        setOperation("")
      }
  }

  const HandleEquals = () => {
    if (FirstNumber !== "0" && Operation !== "" && CurrentNumber !== "0") {
      switch (Operation) {
        case "+":
          HandleSumNumbers()
          break
        case "-":
          HandleMinusNumbers()
          break
        case "*":
          HandleMultiplyNumbers()
          break
        case "/":
          HandleDivideNumbers()
          break
        
        default:
          break
      }  
    }
  }

  return (
    <>
        <Container>
          <Content>
            <Input value={CurrentNumber}/>
            <Row>
              <Buton label="1" onClick={() => HandleAddNumber('1')} />
              <Buton label="2" onClick={() => HandleAddNumber('2')} />
              <Buton label="3" onClick={() => HandleAddNumber('3')} />
              <Buton label="+" onClick={() => HandleSumNumbers()} />
            </Row>
            <Row>
              <Buton label="4" onClick={() => HandleAddNumber('4')} />
              <Buton label="5" onClick={() => HandleAddNumber('5')} />
              <Buton label="6" onClick={() => HandleAddNumber('6')} />
              <Buton label="-" onClick={() => HandleMinusNumbers()} />
            </Row>
            <Row>
              <Buton label="7" onClick={() => HandleAddNumber('7')} />
              <Buton label="8" onClick={() => HandleAddNumber('8')} />
              <Buton label="9" onClick={() => HandleAddNumber('9')} />
              <Buton label="*" onClick={() => HandleMultiplyNumbers()} />
            </Row>
            <Row>
              <Buton label="0" onClick={() => HandleAddNumber('0')} />
              <Buton label="C" onClick={() => HandleOnClear() } />
              <Buton label="=" onClick={() => HandleEquals()} />
              <Buton label="/" onClick={() => HandleDivideNumbers()} />
            </Row>
          </Content>
        </Container>      
      </>
  );
}

export default App;
