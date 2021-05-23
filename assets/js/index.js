var doctordetails = document.getElementById("doctor-details");
var doctormodal = document.getElementById("doctorModal");

var doctordetailshtml = "";
var doctormodalhtml = "";
doctors.forEach((doctor) => {
  doctordetailshtml += `<div class="col-lg-6">
    <div class="card custom-card">
        <div class="card-body">
            <div style="display: flex; justify-content: flex-start">
                <div class="doctor-image card-row"><img src="./assets/images/${doctor.image}"></div>
                <div>
                    <span class="doctor-field doctor-name">${doctor.name}</span>
                    <span class="doctor-field doctor-qual">${doctor.qualification}</span>
                </div>
            </div>
            <div class="card-text">
                <div class="card-sub">
                    <div class="card-row">
                        <i class="bi bi-star-fill card-logo"></i>
                        <div>
                            <h2 class="row-head">Specialities</h2>
                            <span class="row-span">${doctor.specialities}</span>
                        </div>
                    </div>
                    <div class="card-row">
                        <i class="bi bi-briefcase-fill card-logo"></i>
                        <div>
                            <h2 class="row-head">Experience</h2>
                            <span class="row-span">${doctor.current_job}</span>
                        </div>
                    </div>
                    <div class="card-row">
                        <i class="bi bi-megaphone-fill card-logo"></i>
                        <div>
                            <h2 class="row-head">Known Languages</h2>
                            <span class="row-span">${doctor.languages}</span>
                        </div>
                    </div>
                    <div class="button-row">
                        <button type="button" class="btn btn-primary appointment-btn" data-toggle="modal" data-target="#${doctor.image.split('.')[0]}Modal">
                            Book An Appointment
                        </button>
                        <button type="button" class="btn btn-primary appointment-btn consult" data-toggle="modal" data-target="#hiwModal">
                            Consult Now
                    </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>`;

  doctormodalhtml += `<div class="modal fade" id="${doctor.image.split('.')[0]}Modal" tabindex="-1" aria-labelledby="${doctor.image.split('.')[0]}ModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content" style="background-color: white;">
            <div class="modal-header" style="border: none;">
                <div class="round"><img src="./assets/images/${doctor.image}"></div>
                <div class="modal-qualifications">
                    <span>${doctor.name}</span>
                    <span>${doctor.qualification}</span>
                </div>

                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body" style="text-align: justify; ">
                <h2>About</h2>
                <p>${doctor.about}</p>
            </div>
            <div class="modal-footer" style="border: none;">
                <button type="button" class="btn btn-primary appointment-modal">
                    <i class="bi bi-whatsapp whatsapp"></i>Make An Appointment
                </button>
            </div>
        </div>
    </div>
</div>`;
});
doctordetails.innerHTML = doctordetailshtml;
doctormodal.innerHTML = doctormodalhtml;