import React from 'react';
import './recommended-job.styles.scss';
import ButtonContract from '../button-contract-dropdown/button-contract.component';
import ProgressCircle from '../progress-circle/progress-circle.component';
import FormInput from '../form-input/form-input.component';


const RecommendedJob = (props) => {
	if (props.currentStep !== 2) {
		return null;
	}

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
					<p className="text-muted">Pilih minimal 1 maksimal 3 pekerjaan yang anda inginkan</p>
				</div>
				<div className="recommendation-job__buttoncontract">
					{props.jobrecommended.map((jobrecom) => (
						<ButtonContract
							key={jobrecom.id}
							value={jobrecom.id}
							text={jobrecom.job_category_name}
							onClick={props.handleRecommended}
						/>
					))}
				</div>
				<div className="recommendation-job__circle-progress">
					<ProgressCircle value="Pekerjaan" />
					<ProgressCircle value="Tipe Pekerjaan" />
					<ProgressCircle value="Lokasi" />
				</div>
				<div className="recommendation-job__button">
					<FormInput type="submit" value="LEWATI" onClick={props.handleSubmit} color="white" />
					<FormInput type="submit" value="LANJUT" onClick={props.handleSubmit} />
				</div>
			</div>
		</div>
	);
};

export default RecommendedJob;
