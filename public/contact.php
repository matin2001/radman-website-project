<?php
// Set headers to allow JSON exchange and UTF-8 encoding
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json; charset=UTF-8");

// 1. Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(["success" => false, "message" => "Method not allowed"]);
    exit;
}

// 2. Read the JSON sent from React
$rawInput = file_get_contents('php://input');
$input = json_decode($rawInput, true);

if (!$input) {
    http_response_code(400);
    echo json_encode(["success" => false, "message" => "Invalid data"]);
    exit;
}

// 3. Extract and sanitize fields
$name    = htmlspecialchars(trim($input['fullName'] ?? 'نامشخص'));
$phone   = htmlspecialchars(trim($input['phone'] ?? 'ارائه نشده'));
$email   = htmlspecialchars(trim($input['email'] ?? 'ارائه نشده'));
$message = htmlspecialchars(trim($input['message'] ?? 'بدون پیام'));

// 4. Email setup
$to = "info@radmaninvest.com";
$subject = "=?UTF-8?B?" . base64_encode("پیام جدید از وب‌سایت: " . $name) . "?=";

$body = "اطلاعات فرم تماس وب‌سایت رادمان:\n\n";
$body .= "نام و نام خانوادگی: " . $name . "\n";
$body .= "شماره تماس: " . $phone . "\n";
$body .= "ایمیل: " . $email . "\n\n";
$body .= "متن پیام:\n" . $message . "\n";

// 5. Headers
$headers = "From: noreply@radmaninvest.com\r\n";
$headers .= "Reply-To: " . $email . "\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
$headers .= "Content-Transfer-Encoding: 8bit\r\n";

// 6. Send email using server's mail system
if (mail($to, $subject, $body, $headers)) {
    echo json_encode(["success" => true]);
} else {
    http_response_code(500);
    echo json_encode(["success" => false, "message" => "Mail server failed to send."]);
}
?>