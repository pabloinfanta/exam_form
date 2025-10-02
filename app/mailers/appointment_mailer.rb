class AppointmentMailer < ApplicationMailer
  def appointment_email(info)
    @info = info
    mail(to: 'evaluaciones@gesalud.cl', subject: 'Agendamiento '"#{@info['company']}")
  end
end