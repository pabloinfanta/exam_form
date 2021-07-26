require 'test_helper'

class ExamFormControllerTest < ActionDispatch::IntegrationTest
  test "should get show" do
    get exam_form_show_url
    assert_response :success
  end

  test "should get send_email" do
    get exam_form_send_email_url
    assert_response :success
  end

end
