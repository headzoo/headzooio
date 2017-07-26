<?php
namespace AppBundle\Controller;

use Symfony\Component\HttpFoundation\Response;

class Controller
    extends \Symfony\Bundle\FrameworkBundle\Controller\Controller
{
    /**
     * @param mixed $data
     * @param int $status
     * @return Response
     */
    public function jsonResponse($data, $status = 200, $headers = [])
    {
        $headers = array_merge(["Content-Type" => "application/json"], $headers);
        return new Response(
            json_encode($data),
            $status,
            $headers
        );
    }
}
