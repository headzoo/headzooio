<?php
namespace AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class ContactController extends Controller
{
    public function submitAction(Request $req)
    {
        $json = $req->getContent();
        $data = json_decode($json, true);
        $text = sprintf(
            "%s\r\n\r\n%s\r\nUser-Agent: %s\r\nIP: %s",
            $data["message"],
            str_repeat("-", 78),
            $req->headers->get("user-agent"),
            $req->getClientIp()
        );
        
        $mailer  = $this->get("mailer");
        $message = \Swift_Message::newInstance()
            ->setSubject($data["subject"])
            ->setReplyTo($data["email"])
            ->setFrom("contact@headzoo.io")
            ->setTo("sean@headzoo.io")
            ->setBody($text);
        $sent = $mailer->send($message);
        
        return new Response($sent);
    }
}