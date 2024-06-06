import React, { useState } from "react";
import SourceAccount from "./components/SourceAccount";
import { FaCheck } from "react-icons/fa";
import { cardData } from "./cardData";

const App = () => {
	const [step, setStep] = useState(0);
  const [cards, setCards] = useState(cardData);
	const [selectedAccount, setSelectedAccount] = useState(cards[0]);
	const [formData, setFormData] = useState({
		selectedAccount: null,
		amount: "",
		narration: "",
	});

	const HandleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

	const HandleSubmit = () => {
		if(formData.selectedAccount.status === "active"){
			setStep((prevStep) => prevStep + 1)
		}else{
			alert("Sorry i am still reading the selected Account status as inactive")
		}
	}

	const isFormValid = selectedAccount && selectedAccount.status === "active" && formData.amount && formData.narration
	return (
		<div className="py-5">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-md-8">
						<div className="card shadow p-2">
							{step && step === 0 && (
								<>
									<SourceAccount />
									<div className="p-4">
										<div className="my-2">
											<label htmlFor="">Amount</label>
											<input type="text" className="form-control" placeholder="Enter Amount" value={formData.amount} onChange={HandleChange} />
										</div>
										<div className="mt-2 mb-4">
											<label htmlFor="">Narration</label>
											<input type="text" className="form-control" placeholder="Enter Narration" value={formData.narration} onChange={HandleChange} />
										</div>
										<button className={isFormValid ? "btn btn-primary px-5 cursor-pointer": "btn btn-secondary px-5 cursor-not-allowed"} disabled={isFormValid ? null : true} onClick={HandleSubmit}>Submit</button>
									</div>
								</>
							)}

							{step && step === 1 && (
								<>
									<div className="p-5  text-center">
										<FaCheck size={70} className="p-2 text-success" style={{border: "4px solid green", borderRadius: "50%"}} />
										<h3 className="py-2">Congrats, you have completed this test</h3>
									</div>
								</>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default App;
