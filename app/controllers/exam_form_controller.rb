class ExamFormController < ApplicationController

  def show; end

  def send_email
    respond_to do |format|
      format.js if AppointmentMailer.appointment_email(exam_form_params.to_h).deliver
    end
  end

  def exam_form_params
    params.permit!
  end
end
