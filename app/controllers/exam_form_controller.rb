class ExamFormController < ApplicationController
  def show; end

  def send_email
    if AppointmentMailer.appointment_email(exam_form_params.to_h).deliver_now
      respond_to do |format|
        format.html { redirect_to root_path, notice: "Correo enviado con éxito." }
        format.js   # busca send_email.js.erb
      end
    else
      respond_to do |format|
        format.html { redirect_to root_path, alert: "Error al enviar el correo." }
        format.js   { render js: "alert('Error al enviar el correo');" }
      end
    end
  end


  def exam_form_params
    params.permit!
  end
end
