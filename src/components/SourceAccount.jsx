import React, { useEffect, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { FaTriangleExclamation } from "react-icons/fa6";
import ProfileImg from "../image/user-circle.png"


const SourceAccount = ({selectedCard, setSelectedCard, cards}) => {

  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const handleNext = () => {
		setCurrentCardIndex((prevIndex) => (prevIndex + 1) % cards.length);
	};

	const handlePrev = () => {
		setCurrentCardIndex(
			(prevIndex) => (prevIndex - 1 + cards.length) % cards.length
		);
	};

  useEffect(() => {
		setSelectedCard(cards[currentCardIndex]);
	}, []);

	return (
		<div className="px-4">
			<p className="text-muted">Select Source Account</p>
			<div className="position-relative d-flex align-items-center w-100">
				<button
					className="position-absolute left-0 p-1"
					onClick={handlePrev}
					style={{ transform: "translateX(-40px)",border: "3px solid #012E63", color: "#012E63", background: "#fff" }}
				>
					<FaAngleLeft size={32} />
				</button>
				<div className="flex-grow-1 d-flex justify-content-center align-items-center">
					<div
						className="rounded shadow w-100 p-4"
						style={{
							background: selectedCard.status === "active" ? "#012E63" : "#120d4288",
						}}
					>
						<div className="d-flex justify-content-between align-items-center">
							<div className="d-flex gap-2 align-items-center">
								<img
									src={ProfileImg}
									alt="User"
									className="rounded-circle mx-auto"
									style={{ width: "60px", height: "60px" }}
								/>
								<div>
									<p className="text-warning small mb-1">Savings Account</p>
									<h3 className="text-light mb-0 text-uppercase">
										{selectedCard.name}
									</h3>
									<p className="text-light small">
										{selectedCard.accountNumber}
									</p>
								</div>
							</div>
							<div className="d-flex flex-column text-right">
								<h3 className="text-light mb-0">₦{selectedCard.balance}</h3>
								<p className="text-secondary small mb-0">
									Book Balance:{" "}
									<span className="text-warning">₦{selectedCard.balance}</span>
								</p>
							</div>
						</div>
					</div>
				</div>
				<button
					className="position-absolute right-0 p-1"
					onClick={handleNext}
					style={{ transform: "translateX(780px)",border: "3px solid #012E63", color: "#012E63", background: "#fff" }}
				>
					<FaAngleRight size={32} />
				</button>
			</div>
			{selectedCard.status !== "active" && (
				<small className="d-flex align-items-center text-muted pl-2">
					<FaTriangleExclamation className="text-danger small mt-1" />
					Account Not Debitable
				</small>
			)}
		</div>
	);
};

export default SourceAccount;
