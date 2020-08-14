import React, { useEffect } from 'react';
import './type-contract.styles.scss';
import ButtonContract from '../button-contract-dropdown/button-contract.component';
import ProgressCircle from '../progress-circle/progress-circle.component';
import FormInput from '../form-input/form-input.component';
const TypeContract = (props) => {
	if (props.currentStep !== 3) {
		return null;
	}
	console.log(props.contract);
	return (
		<div>
			<div className="recommendation-job">
				<div className="recommendation-job__title text-center">
					<p className="no-margin">
						<strong>Dapatkan pekerjaan yang sesuai</strong>
					</p>
					<p>
						<strong>dengan keinginan anda di PasarKerja</strong>
					</p>
					<p className="text-muted">Pilih tipe pekerjaan yang anda inginkan</p>
				</div>
				<div className="recommendation-job__buttoncontract">
					{props.contract.map((contract) => (
						<ButtonContract
							value={contract.id}
							text={contract.contract_name}
							onClick={props.handleChange}
						/>
					))}
					{/* 					
					<ButtonContract value="Penuh-waktu" onClick={props.handleChange} />
					<ButtonContract value="Magang" onClick={props.handleChange} />
					<ButtonContract value="Kontrak" onClick={props.handleChange} /> */}
				</div>
				<div className="recommendation-job__circle-progress">
					<ProgressCircle value="Pekerjaan" />
					<ProgressCircle value="Tipe Pekerjaan" />
					<ProgressCircle value="Lokasi" />
				</div>
				<div className="recommendation-job__button">
					<FormInput type="submit" value="LEWATI" color="white" />
					<FormInput type="submit" onClick={props.handleSubmit} value="LANJUT" />
				</div>
			</div>
		</div>
	);
};

export default TypeContract;
