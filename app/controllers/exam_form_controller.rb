class ExamFormController < ApplicationController
  def show; end

  def send_email
    respond_to do |format|
      if AppointmentMailer.appointment_email(exam_form_params.to_h).deliver
        format.js
      else
        format.js { render action: 'validation' }
      end
    end
  end

  def exam_form_params
    params.permit!
  end
end
